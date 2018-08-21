function addSkill(skillName) {
    let selectedSkills = getSelectedSkillNames();
    let isSelected = selectedSkills.indexOf(skillName) !== -1;

    if (isSelected) {
        return;
    }

    let skillHTML = "<div class=\"alert alert-danger d-flex justify-content-between skillBlock\" role=\"alert\" data-name=\""+skillName+"\">\n" +
        "    <div class=\"levelHeaderContainer\">\n" +
        "       <h4 class=\"alert-heading\">"+skillName+"</h4>\n" +
        "       <button type=\"button\" class=\"close align-self-start\" data-dismiss=\"alert\">×</button>\n" +
        "    </div>\n" +
        "    <select class=\"custom-select skillSlider\">\n" +
        "       <option selected>Определите уровень</option>\n" +
        "       <option value=0>Не владею</option>\n" +
        "       <option value=1>Основы</option>\n" +
        "       <option value=2>Уверенный</option>\n" +
        "       <option value=3>Глубокий</option>\n" +
        "    </select>\n" +
        "</div>\n";

    $('.skillContainer').prepend(skillHTML);
    toggleAdditionalSkills();
    toggleUpdatableSkills();
    updateSkillLists();
    search();
}

function clearVacanciesList() {
    $('#vacancyList').html('');
    $('#notMatchedVacancyList').html('');
}

function getSkillsFilter() {
    let skillsData = {};

    $('.skillBlock').each(function () {
        let skillName = $(this).find('h4').text();
        let skillLevel = parseInt( $(this).find('select').val() ) || 0;

        skillsData[skillName] = skillLevel;
    });

    return skillsData;
}

function getSelectedSkillNames() {
    return Object.keys(getSkillsFilter());
}

function matchVacancy(vacancy, filter) {
    let isMatching = true;
    let vacancySkillNames = Object.keys(vacancy.skills);

    vacancySkillNames.forEach(function (skillName) {
        let isInFilter = typeof filter[skillName] !== 'undefined';
        let levelMatches = isInFilter && vacancy.skills[skillName] <= filter[skillName];
        isMatching = isMatching && levelMatches;
    });

    return isMatching;
}

function getMatchingSkills(vacancy, filter) {
    let vacancySkillNames = Object.keys(vacancy.skills);
    let matchingSkills = [];

    vacancySkillNames.forEach(function (skillName) {
        let isInFilter = typeof filter[skillName] !== 'undefined';
        let levelMatches = isInFilter && vacancy.skills[skillName] <= filter[skillName];

        if (levelMatches) {
            matchingSkills.push(skillName);
        }
    });

    return matchingSkills;
}

function getUnmatchingSkills(vacancy, filter) {
    let vacancySkillNames = Object.keys(vacancy.skills);
    let unmatchingSkills = [];

    vacancySkillNames.forEach(function (skillName) {
        let isInFilter = typeof filter[skillName] !== 'undefined';
        let levelNotMatches = isInFilter && vacancy.skills[skillName] > filter[skillName];

        if (levelNotMatches) {
            unmatchingSkills.push(skillName);
        }
    });

    return unmatchingSkills;
}

function getUndefinedSkills(vacancy, filter) {
    let vacancySkillNames = Object.keys(vacancy.skills);
    let undefinedSkills = [];

    vacancySkillNames.forEach(function (skillName) {
        let isNotInFilter = typeof filter[skillName] === 'undefined';

        if (isNotInFilter) {
            undefinedSkills.push(skillName);
        }
    });

    return undefinedSkills;
}

function getMatchRating(vacancy, filter) {
    let vacancySkillNames = Object.keys(vacancy.skills);
    let matchingSkillsCount = getMatchingSkills(vacancy, filter).length;
    let unmatchingSkillsCount = getUnmatchingSkills(vacancy, filter).length;
    let skillsCount = vacancySkillNames.length;

    return (matchingSkillsCount - unmatchingSkillsCount * 0.5) / skillsCount;
}

function findVacancies(filter) {
    return getVacanciesList()
        .filter(function (vacancy) {
            return matchVacancy(vacancy, filter);
        });
}

function findParticialMacth(filter) {
    let minimumRating = 0.3;

    return getVacanciesList()
        .filter(function (vacancy) {
            let isNotInRecommendedList = !matchVacancy(vacancy, filter);
            return isNotInRecommendedList;
        })
        .filter(function (vacancy) {
            let rating = getMatchRating(vacancy, filter);
            return rating >= minimumRating;
        })
        .sort(function (vacancyA, vacancyB) {
            let ratingA = getMatchRating(vacancyA, filter);
            let ratingB = getMatchRating(vacancyB, filter);

            if (ratingA > ratingB) {
                return -1;
            }

            if (ratingA < ratingB) {
                return 1;
            }

            return 0;
        });
}

function search() {
    if (!hasEnoughSkills()) {
        return;
    }

    toggleSkillsResult();
    clearVacanciesList();

    let recommendedVacancies = findVacancies(getSkillsFilter());

    if (recommendedVacancies.length > 0) {
        $('.noRecommendedVacancies').hide();
        recommendedVacancies
            .forEach(function (vacancy, index) {
                addVacancy(vacancy, index, '#vacancyList');
            });
    }
    else {
        $('.noRecommendedVacancies').show();
    }


    findParticialMacth(getSkillsFilter())
        .forEach(function (vacancy, index) {
            addVacancy(vacancy, index, '#notMatchedVacancyList');
        });

    $('.searchResults').css('opacity', '0.3');
    setTimeout(function () {
        $('.searchResults').attr('style', '');
    }, 2000);
}

function toggleSkillsResult() {
    let areVacanciesFound = findParticialMacth(getSkillsFilter()).length > 0;
    let allSkillsDefined = hasSkillsWithoutLevels() === false;

    if (hasEnoughSkills() && areVacanciesFound) {
        $('.noSkillsDefined').hide();
        $('.noVacanciesFound').hide();
        $('.searchResults').show();
    }
    else if (!areVacanciesFound && allSkillsDefined) {
        $('.noSkillsDefined').hide();
        $('.noVacanciesFound').show();
        $('.searchResults').hide();
    }
    else {
        $('.noSkillsDefined').show();
        $('.noVacanciesFound').hide();
        $('.searchResults').hide();
    }
    toggleAdditionalSkills();
}

function toggleUpdatableSkills() {
    if (hasUpdatableSkills()) {
        updateUpdatableSkills();
        $('.updateSkills').show();
    }
    else {
        $('.updateSkills').hide();
    }
}

function hasUpdatableSkills() {
    return getUpdatableSkillList().length > 0;
}

function hasEnoughSkills() {
    return $('.skillBlock').length > 0 && findParticialMacth(getSkillsFilter()).length > 0;
}

function removeSkills(allSkills, removedSkills) {
    if (!allSkills) {
        return allSkills;
    }

    let filteredSkills = allSkills.filter(function (skillName) {
        return removedSkills.indexOf(skillName) === -1;
    });
    return filteredSkills;
}

function removeSelectedSkills(allSkills) {
    return removeSkills(allSkills, getSelectedSkillNames());
}

function updateUpdatableSkills() {
    let updatableSkills = getUpdatableSkillList();

    $('.updateSkillsContainer').html('');

    if (updatableSkills.length === 0) {
        return;
    }

    updatableSkills.forEach(function (skillName) {
        $('.updateSkillsContainer').append('<a href="#" class="dashedLink">'+skillName+'</a><span></span>');
    });
}

function updateAdditionalSkills(additionalSkills) {
    let shownAdditionalSkills = removeSelectedSkills(additionalSkills);

    $('.addSkillsContainer').html('');

    if (!shownAdditionalSkills ) {
        return;
    }

    if (shownAdditionalSkills.length === 0) {
        return;
    }

    shownAdditionalSkills.forEach(function (skillName) {
        $('.addSkillsContainer').append('<a href="#" class="dashedLink" data-skill="'+skillName+'">'+skillName+'</a><span></span>');
    });
}

function updateAllSkills() {
    let minSkills = getMinNeededSkills();
    let filteredSkills = removeSelectedSkills( getSkills(getVacanciesList()) );
    filteredSkills = removeSkills(filteredSkills, minSkills);

    $('#allSkills').html('');
    if (filteredSkills && filteredSkills.length === 0) {
        return;
    }

    addAllSkills( filteredSkills );
}

function getMinNeededSkills() {
    return removeSelectedSkills( getNeededSkills(getVacanciesList(), 1) );
}

function hasSkillsWithoutLevels() {
    return $('.skillContainer .alert-danger.skillBlock').length > 0;
}

function updateStartSkills() {
    let filteredSkills = getMinNeededSkills();
    $('#startSkills').html('');

    if (filteredSkills.length === 0) {
        let neededSkills = removeSelectedSkills( getNeededSkills(getVacanciesList(), neededVacancies) );
        let hasNoNeededSkills = neededSkills.length === 0;
        if (hasNoNeededSkills) {
            neededVacancies++;
            neededSkills = removeSelectedSkills( getNeededSkills(getVacanciesList(), neededVacancies) );
        }

        let $textContainer = $('#startSkills').closest(".col-md-8").find('p');
        $textContainer.text('Пожалуйста, укажите уровень владения выбранными навыками');


        if (hasSkillsWithoutLevels()) {
            $('#startSearch:visible').hide();
            $('#startSkills').hide();
        }
        else {
            $('#startSkills').show();
        }


        addNeededSkills( neededSkills );
        addStartSkills( neededSkills );
    }
    else {
        addStartSkills( filteredSkills );
    }
}

function updateMinSkills() {
    let minSkills = getMinNeededSkills();
    $('#minSkills').html('');

    if (minSkills.length === 0) {
        return;
    }

    addMinSkills( minSkills );
}

function updateSkillLists() {
    updateAllSkills();
    updateMinSkills();
    updateStartSkills();
    updateAdditionalSkills();
    updateUpdatableSkills();
}

function toggleAdditionalSkills() {
    let foundVacanciesCount = findVacancies(getSkillsFilter()).length;
    let selectedSkills = getSelectedSkillNames();
    let neededSkills = getNeededSkills(getVacanciesList(), foundVacanciesCount+1);

    let allAdditionalSkills = [];
    neededSkills.forEach(function (skillName) {
        let skillNotSelected = selectedSkills.indexOf(skillName) === -1;
        if (skillNotSelected) {
            allAdditionalSkills.push(skillName);
        }
    });

    let shownAdditionalSkills = removeSelectedSkills(allAdditionalSkills);
    let hasAdditionalSkills = shownAdditionalSkills.length > 0;

    updateAdditionalSkills(allAdditionalSkills);

    if (hasEnoughSkills() && hasAdditionalSkills) {
        $('.additionalSkills').show();
    }
    else {
        $('.additionalSkills').hide();
    }
}

function getMinimalSkills(vacancies) {
    let skillMinLevelData = {};

    vacancies.forEach(function (vacancy) {
        let skillNames = Object.keys(vacancy.skills);
        skillNames.forEach(function (skillName) {
            let isNotSet = typeof skillMinLevelData[skillName] === 'undefined';
            let isLevelHigher = skillMinLevelData[skillName] > vacancy.skills[skillName];

            if (isNotSet || isLevelHigher) {
                skillMinLevelData[skillName] = vacancy.skills[skillName];
            }
        });
    });

    return skillMinLevelData;
}

function countAdditionalVacanciesOnSkillUpdate(vacancies, filter, testSkillName) {
    let maximumLevel = 3;
    let currentLevel = filter[testSkillName];
    let maxFilter = $.extend({}, filter);
    Object.keys(maxFilter).forEach(function (skillName) {
        maxFilter[skillName] = maximumLevel;
    });

    let currentVacancies = findVacancies(filter);
    let currentCount = currentVacancies.length;
    let maxVacancies = findVacancies(maxFilter);
    let maxCount = maxVacancies.length;

    let additionalVacancies = maxVacancies.filter(function (maxVacancy) {
        let notFoundInCurrent = currentVacancies.reduce(function (found, currentVacancy) {
            return found && maxVacancy.id !== currentVacancy.id;
        }, true);

        return notFoundInCurrent;
    });

    let minSkills = getMinimalSkills(additionalVacancies);

    let levelLowerMin = currentLevel < minSkills[testSkillName];

    if (currentCount < maxCount && levelLowerMin) {
        return maxCount - currentCount;
    }

    return 0;
}

function getUpdatableSkillList() {
    let filter = getSkillsFilter();
    let vacancies = getVacanciesList();
    let updatableSkills = [];

    $('.skillBlock').each(function () {
        let skillName = $(this).find('h4').text();
        let additionalVacancies = countAdditionalVacanciesOnSkillUpdate(vacancies, filter, skillName);

        if (additionalVacancies > 0) {
            updatableSkills.push(skillName);
        }
    });

    return updatableSkills;
}

function addStartSkills(startSkills) {
    addSkillsToList(startSkills, '#startSkills');
}

function addNeededSkills(neededSkills) {
    addSkillsToList(neededSkills, '#updatedSkills');
}

function addSkillsToList(skillNames, selector) {
    let skillsHtml = [];

    skillNames.forEach(function (startSkill) {
        skillsHtml.push('<a href="#" class="dashedLink" data-skill="'+startSkill+'">'+startSkill+'</a>');
    });

    $(selector).html( skillsHtml.join(', ') );
}

function sortSkillsByCount(allSkills) {
    let skillsCount = getSkillCount(getVacanciesList());

    return allSkills.sort(function (first, second) {
        let firstCount = skillsCount[first];
        let secondCount = skillsCount[second];

        if (firstCount > secondCount) {
            return -1;
        }

        if (firstCount < secondCount) {
            return 1;
        }

        return 0;
    })
}

function addSkillToPopup(allSkills, selector) {
    let skillsHtml = [];
    let skillsCount = getSkillCount(getVacanciesList());

    sortSkillsByCount(allSkills).forEach(function (skill, index) {
        let skillCount = skillsCount[skill] || 0;
        let countText = index === 0 ? skillCount + ' вакансий' : skillCount;

        skillsHtml.push('<a href="#" class="list-group-item list-group-item-action d-flex justify-content-between align-items-center" data-name="'+skill+'">'+skill+' <span class="badge badge-primary">'+countText+'</span></a>');
    });

    $(selector).html( skillsHtml.join('') );
}

function addAllSkills(allSkills) {
    addSkillToPopup(allSkills, '#allSkills');
}

function addMinSkills(allSkills) {
    addSkillToPopup(allSkills, '#minSkills');
}

function getSalaryHtml(vacancy) {
    if (vacancy.salary) {
        if (vacancy.salary.from && vacancy.salary.to) {
            return "От " + vacancy.salary.from + " до " + vacancy.salary.to + "руб";
        }

        if (!vacancy.salary.from) {
            return "До " + vacancy.salary.to + "руб";
        }
        else {
            return "От " + vacancy.salary.from + "руб";
        }
    }

    return 'Заработная плата не указана';
}

function getAttributesHtml(vacancy) {
    let attributes = [
        vacancy.location,
        vacancy.schedule
    ];

    return attributes.join(" • ");
}

function getSkillsHtml(vacancy) {
    let filter = getSkillsFilter();
    let matchingSkills = getMatchingSkills(vacancy, filter);
    let undefinedSkills = getUndefinedSkills(vacancy, filter);
    let unmatchingSkills = getUnmatchingSkills(vacancy, filter);

    let matchingSkillsHtml = matchingSkills.map(function (skillName) {
        return '<span class="badge badge-success" data-toggle="tooltip" title="Подходит под требования">'+skillName+'</span>';
    });

    let unmatchingSkillsHtml = unmatchingSkills.map(function (skillName) {
        return '<span class="badge badge-danger" data-toggle="tooltip" title="Не соответствует требованиям">'+skillName+'</span>';
    });

    let undefinedSkillsHtml = undefinedSkills.map(function (skillName) {
        return '<a href="#" class="badge badge-secondary" data-skill="'+skillName+'" data-toggle="tooltip" title="Текущий уровень не определен">'+skillName+'</a>';
    });

    return matchingSkillsHtml.join("\n") + "\n" + unmatchingSkillsHtml.join("\n") + "\n" + undefinedSkillsHtml.join("\n");
}

function addVacancy(vacancy, index, selector) {
    let desciptionHtml = vacancy.description.replace(/\n/g, '<br>');
    let isRecommended = selector === '#vacancyList';
    let additionalClass = isRecommended ? 'bg-warning' : '';
    let hasNoUndefinedSkills = getUndefinedSkills(vacancy, getSkillsFilter()).length === 0;
    let canSendResume = isRecommended || hasNoUndefinedSkills;

    let buttonHtml = canSendResume
        ? "<a href=\"#\" class=\"btn btn-primary d-flex justify-content-center\">Отправить резюме</a>\n"
        : "<span tabindex=\"0\" data-toggle=\"tooltip\" title=\"Отправка резюме невозможна, пока не определен уровень всех требуемых навыков\"><a href=\"#\" class=\"btn btn-secondary disabled d-flex justify-content-center\" disabled=\"disabled\">Отправить резюме</a></span>\n";

    let vacancyHtml = "<div class=\"card m-1\">"+
        "   <div class=\"card-body "+additionalClass+"\">\n" +
        "       <span class=\"badge badge-secondary priceBadge\">" +getSalaryHtml(vacancy)+ "</span>\n" +
        "       <h4>"+vacancy.title+"</h4>\n" +
        "       <h6 class=\"text-muted\">"+vacancy.company+"</h6>\n" +
        "       <p>"+getAttributesHtml(vacancy)+"</p>\n" +
        "       <p>Требования:</p>\n" +
        "       <p>"+getSkillsHtml(vacancy)+"</p>\n" +
        "       <button class=\"btn btn-outline-secondary mb-3\" data-toggle=\"collapse\" data-target=\"#description" + index + "\" aria-expanded=\"true\" aria-controls=\"description1\">\n" +
        "           Описание вакансии\n" +
        "       </button>\n" +
        "       <p id=\"description" + index + "\" class=\"collapse\">\n" + desciptionHtml + "</p>\n" +
        buttonHtml +
        "   </div>"+
        "</div>";

    $(selector).append(vacancyHtml);
}

function findVacanciesBySkillNames(vacancies, skillNames) {
    let foundVacancies = vacancies.filter(function (vacancy) {
        let vacancySkills = Object.keys(vacancy.skills);

        let missingSkills = vacancySkills.filter(function (skillName) {
            return skillNames.indexOf(skillName) === -1;
        });

        return missingSkills.length === 0;
    });

    return foundVacancies;
}

function getSkills(vacancies) {
    return vacancies.reduce(function (allSkills, vacancy) {
        let skillNames = Object.keys(vacancy.skills);

        skillNames.forEach(function (skillName) {
            if (allSkills.indexOf(skillName) === -1) {
                allSkills.push(skillName);
            }
        });

        return allSkills;
    }, []);
}

function getSkillCount(vacancies) {
    let skillCountData = {};

    vacancies.forEach(function (vacancy) {
        let skillNames = Object.keys(vacancy.skills);
        skillNames.forEach(function (skillName) {
            if (typeof skillCountData[skillName] === 'undefined') {
                skillCountData[skillName] = 0;
            }

            skillCountData[skillName] += 1;
        });
    });

    return skillCountData;
}

function getAverageSkillWeight(vacancies, vacancy) {
    let totalWeight = 0;
    let skillNames = Object.keys(vacancy.skills);
    let skillCount = getSkillCount(vacancies);

    skillNames.forEach(function (skillName) {
        totalWeight += skillCount[skillName];
    });

    return totalWeight / skillNames.length;
}

function getNeededSkills(vacancies, minimumVacancies) {
    let vacanciesSortedByAverageSkillWeight = vacancies.sort(function (first, second) {
        let firstWeight = getAverageSkillWeight(vacancies, first);
        let secondWeight = getAverageSkillWeight(vacancies, second);

        if (firstWeight > secondWeight) {
            return -1;
        }

        if (firstWeight < secondWeight) {
            return 1;
        }

        return 0;
    });

    let neededSkills = [];

    vacanciesSortedByAverageSkillWeight.forEach(function (vacancy) {
        let foundVacancies = findVacanciesBySkillNames(vacancies, neededSkills);
        if (foundVacancies.length >= minimumVacancies) {
            return;
        }

        let vacancySkillNames = Object.keys(vacancy.skills);
        vacancySkillNames.forEach(function (vacancySkillName) {
            if (neededSkills.indexOf(vacancySkillName) === -1) {
                neededSkills.push(vacancySkillName);
            }
        });
    });

    return neededSkills;
}
