const testControllerFactory = require('./Controller');
const testPageViewFactory = require('./View');
const professionsFactory = require('../../models/Professions');
const answersFactory = require('../../models/Answers');
const professionsMockData = require('../../mocks/professions.json');
const polyfillsFactory = require('../../classes/Polyfills');

const skillControllerFactory = require('../skillLevel/Controller');
const skillViewFactory = require('../skillLevel/View');

const styleManager = require('../../classes/stylesManager');

function getStylesManager() {
    return styleManager;
}

function getTestViewInstance() {
    let rootElement = document.createElement('div');
    let stylesManager = getStylesManager();

    return testPageViewFactory(rootElement, stylesManager);
}

function getControllerInstance(professionCode, competencyCode, view, answersModel) {
    if (!view) {
        view = getTestViewInstance();
    }

    if (!answersModel) {
        answersModel = answersFactory();
    }

    let professionsModel = professionsFactory(professionsMockData);
    let competency = professionsModel.getCompetency(professionCode, competencyCode);
    let skillView = skillViewFactory(undefined, getStylesManager());
    let skillController = skillControllerFactory(skillView, answersModel, competency);

    return testControllerFactory(view, professionsModel, answersModel, professionCode, competencyCode, skillController);
}

test('TestController.interface', function () {
    let testController = getControllerInstance();

    expect(testController.handleEvent).toBeInstanceOf(Function);
    expect(testController.bindEvents).toBeInstanceOf(Function);
});

test('TestController.codes', function () {
    let expectedProfessionCode = 'tester';
    let expectedCompetencyCode = 'operatingSystems';

    let testController = getControllerInstance(expectedProfessionCode, expectedCompetencyCode);
    expect(testController).toHaveProperty('professionCode');
    expect(testController).toHaveProperty('competencyCode');
    expect(testController.professionCode).toEqual(expectedProfessionCode);
    expect(testController.competencyCode).toEqual(expectedCompetencyCode);
});

test('TestController.getViewModel', function () {
    let expectedProfessionCode = 'tester';
    let expectedCompetencyCode = 'operatingSystems';
    let expectedNextCompetencyCode = 'probabiltyBasics';
    let expectedGroupCode = 'environment';
    let expectedLink = '/test/'+expectedProfessionCode+'/'+expectedNextCompetencyCode;
    let expectedCompetenciesCount = 7;
    let expectedCompetencyIndex = 3;
    let expectedLevelsCount = 4;
    let expectedSkillsCount = 23;

    let testController = getControllerInstance(expectedProfessionCode, expectedCompetencyCode);
    let viewModel = testController.getViewModel();

    expect(viewModel).toHaveProperty('profession');
    expect(viewModel).toHaveProperty('competencies');
    expect(viewModel).toHaveProperty('competenciesCount');
    expect(viewModel).toHaveProperty('currentCompetency');
    expect(viewModel).toHaveProperty('isAnswered');
    expect(viewModel).toHaveProperty('nextCompetency');
    expect(viewModel).toHaveProperty('nextCompetencyLink');
    expect(viewModel).toHaveProperty('competencyIndex');
    expect(viewModel).toHaveProperty('competencyGroup');
    expect(viewModel).toHaveProperty('levels');
    expect(viewModel).toHaveProperty('skills');

    expect(viewModel.profession.code).toEqual(expectedProfessionCode);
    expect(viewModel.competencies).toHaveLength(expectedCompetenciesCount);
    expect(viewModel.competenciesCount).toEqual(expectedCompetenciesCount);
    expect(viewModel.currentCompetency.code).toEqual(expectedCompetencyCode);
    expect(viewModel.nextCompetency.code).toEqual(expectedNextCompetencyCode);
    expect(viewModel.nextCompetencyLink).toEqual(expectedLink);
    expect(viewModel.competencyIndex).toEqual(expectedCompetencyIndex);
    expect(viewModel.competencyGroup.code).toEqual(expectedGroupCode);

    expect(viewModel.levels).toHaveLength(expectedLevelsCount);
    expect(viewModel.levels[0]).toHaveProperty('answer');
    expect(viewModel.levels[0]).toHaveProperty('isAnswered');
    expect(viewModel.levels[0]).toHaveProperty('text');

    expect(viewModel.skills).toHaveLength(expectedSkillsCount);
    expect(viewModel.skills[0]).toHaveProperty('answer');
    expect(viewModel.skills[0]).toHaveProperty('answerText');
    expect(viewModel.skills[0]).toHaveProperty('isAnswered');
    expect(viewModel.skills[0]).toHaveProperty('text');
    expect(viewModel.skills[0]).toHaveProperty('additionalDescription');
});

test('TestController skills render and change', function () {
    polyfillsFactory();

    let professionCode = 'tester';
    let competencyCode = 'operatingSystems';

    let view = getTestViewInstance();
    let rootElement = view.getRootElement();
    let answersModel = answersFactory();

    let testController = getControllerInstance(professionCode, competencyCode, view, answersModel);
    testController.renderIndexPageAfterLoad();

    let skillSlider = rootElement.querySelector('#skill0 .skillInput');
    let expectedSkillValue = 1;
    let changeEvent = new Event('input');
    skillSlider.value = expectedSkillValue;
    skillSlider.dispatchEvent(changeEvent);

    let expectedAnswers = [expectedSkillValue, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    expect(answersModel.get(competencyCode)).toEqual(expectedAnswers);
});