<?php

use Competencies\Course\Course;
use Competencies\Course\CourseEntity;
use Competencies\Course\CourseMapper;
use Competencies\Course\CourseSkillEntity;
use Competencies\Course\CourseVisitEntity;
use Competencies\Mocks\Database;
use Competencies\Session\Session;
use Competencies\Session\SessionEntity;
use Competencies\Session\SessionMapper;
use Competencies\Skill\Skill;
use Competencies\Skill\SkillEntity;
use Competencies\User\UserEntity;
use Competencies\User\UserMapper;
use PHPUnit\Framework\TestCase;
use Spot\Locator;
use Spot\MapperInterface;

class CourseMapperTest extends TestCase
{
    private function getTestCourse() {
        $expectedProps = [
            'externalId'           => '35',
            'name'                 => 'Название Курса',
            'description'          => 'Course Description',
            'url'                  => 'https://stepik.org/course/1780/',
            'skills'               => [
                Skill::fromArray(['id' => '40', 'level' => Skill::LEVEL_ABILITY]),
                Skill::fromArray(['id' => '45', 'level' => Skill::LEVEL_KNOWLEDGE]),
            ],
            'requirements'         => [
                Skill::fromArray(['id' => '40', 'level' => Skill::LEVEL_KNOWLEDGE]),
            ],
            'externalRequirements' => 'Для прохождения курса нужно знать А',
            'externalSkills'       => 'В результате прохождения курса слушатели получат Б',
            'modeOfStudy'          => Course::MODE_OF_STUDY_ONLINE,
            'courseForm'           => Course::COURSE_FORM_INTERACTIVE,
            'schedule'             => Course::SCHEDULE_EVENING,
            'certificate'          => true,
            'tasksType'            => Course::TASKS_SELF_CHECK,
            'lengthDays'           => 36,
        ];

        $course = Course::fromArray($expectedProps);

        return $course;
    }

    public function testMake() {
        $locator = Database::getTest();
        $mapper = $locator->mapper(CourseEntity::class);

        $this->assertInstanceOf(CourseMapper::class, $mapper);
    }

    public function testLoadByCode() {
        $testCode = 'osnovy-statistiki';
        $locator = Database::getTest();
        /**
         * @var CourseMapper $instance
         */
        $instance = $locator->mapper(CourseEntity::class);
        $entity = $instance->loadByCode($testCode);

        $this->assertInstanceOf(CourseEntity::class, $entity);
        $this->assertEquals($testCode, $entity->get('code'));
    }

    public function testGetByCode() {
        $testCode = 'osnovy-statistiki';
        $nonExistentCode = 'no-such-course';
        $locator = Database::getTest();
        /**
         * @var CourseMapper $instance
         */
        $instance = $locator->mapper(CourseEntity::class);
        $course = $instance->getByCode($testCode);

        $this->assertInstanceOf(Course::class, $course);
        $this->assertEquals($testCode, $course->getCode());

        $nonExistentCourse = $instance->getByCode($nonExistentCode);
        $this->assertFalse($nonExistentCourse);
    }

    public function testCountCoursesForProfession() {
        $locator = Database::getTest();
        /**
         * @var CourseMapper $instance
         */
        $instance = $locator->mapper(CourseEntity::class);

        $this->assertEquals(9, $instance->countCoursesForProfession('webDeveloper'));
        $this->assertEquals(9, $instance->countCoursesForProfession('tester'));
    }

    public function testGetRecommendations() {
        $locator = Database::getTest();
        /**
         * @var CourseMapper $instance
         */
        $instance = $locator->mapper(CourseEntity::class);

        $recommendations = $instance->getRecommendations([
            'probabiltyBasics' => '0.5'
        ]);

        $this->assertCount(1, $recommendations);
        $this->assertArrayHasKey('totalIncrement', $recommendations[0]);
        $this->assertEquals($recommendations[0]['totalIncrement'], 3);

        $this->assertArrayHasKey('competencies', $recommendations[0]);
        $this->assertCount(1, $recommendations[0]['competencies']);
        $this->assertArrayHasKey('realIncrement', $recommendations[0]['competencies'][0]);
        $this->assertEquals($recommendations[0]['competencies'][0]['realIncrement'], 3);

        $noRecommendations = $instance->getRecommendations([
            'probabiltyBasics' => 5
        ]);
        $this->assertEmpty($noRecommendations);

        $noRecommendations = $instance->getRecommendations([]);
        $this->assertEmpty($noRecommendations);

        $recommendations = $instance->getRecommendations([
            'javascript'         => 0.5,
            'frontendTech'       => 0.75,
            'baseWebDevelopment' => 0.5
        ]);
        $this->assertCount(3, $recommendations);
        $this->assertArrayHasKey('code', $recommendations[0]);
        $this->assertArrayHasKey('code', $recommendations[1]);
        $this->assertArrayHasKey('code', $recommendations[2]);

        $this->assertEquals('html-javascript', $recommendations[0]['code']);
        $this->assertEquals(4.5, $recommendations[0]['totalIncrement']);
        $this->assertEquals('node', $recommendations[1]['code']);
        $this->assertEquals(0.5, $recommendations[1]['totalIncrement']);
        $this->assertEquals('html-verstka', $recommendations[2]['code']);
        $this->assertEquals(0.25, $recommendations[2]['totalIncrement']);
    }

    public function testConvertCourseToEntity() {
        $locator = Database::getTest();

        $course = $this->getTestCourse();
        /**
         * @var CourseMapper $mapper
         */
        $mapper = $locator->mapper(CourseEntity::class);
        $entity = $mapper->convertCourseToEntity($course);

        $this->assertInstanceOf(CourseEntity::class, $entity);

        $this->assertEquals($course->getExternalId(), $entity->get('externalId'));
        $this->assertEquals($course->getName(), $entity->get('name'));
        $this->assertEquals($course->getCode(), $entity->get('code'));
        $this->assertEquals($course->getDescription(), $entity->get('description'));
        $this->assertEquals($course->getUrl(), $entity->get('url'));
        $this->assertEquals($course->getModeOfStudy(), $entity->get('modeOfStudy'));
        $this->assertEquals($course->getCourseForm(), $entity->get('courseForm'));
        $this->assertEquals($course->getSchedule(), $entity->get('schedule'));
        $this->assertEquals($course->hasCertificate(), boolval($entity->get('certificate')));
        $this->assertEquals($course->getTasksType(), $entity->get('tasksType'));
        $this->assertEquals($course->getLengthDays(), $entity->get('lengthDays'));

        $this->assertTrue($entity->isNew());
    }

    private function loadCourse(Course $course, MapperInterface $courseMapper) {
        return $courseMapper->where(['externalId' => $course->getExternalId()])->first();
    }

    private function checkCourseFields(Course $course, CourseEntity $entity) {
        $this->assertEquals($course->getExternalId(), $entity->get('externalId'));
        $this->assertEquals($course->getName(), $entity->get('name'));
        $this->assertEquals($course->getCode(), $entity->get('code'));
        $this->assertEquals($course->getDescription(), $entity->get('description'));
        $this->assertEquals($course->getUrl(), $entity->get('url'));
        $this->assertEquals($course->getModeOfStudy(), $entity->get('modeOfStudy'));
        $this->assertEquals($course->getCourseForm(), $entity->get('courseForm'));
        $this->assertEquals($course->getSchedule(), $entity->get('schedule'));
        $this->assertEquals($course->hasCertificate(), boolval($entity->get('certificate')));
        $this->assertEquals($course->getTasksType(), $entity->get('tasksType'));
        $this->assertEquals($course->getLengthDays(), $entity->get('lengthDays'));
    }

    public function testSaveNew() {
        $locator = Database::getTest();
        $course = $this->getTestCourse();

        /**
         * @var CourseMapper $courseMapper
         */
        $courseMapper = $locator->mapper(CourseEntity::class);
        $saveResult = $courseMapper->saveCourse($course);

        $this->assertTrue($saveResult);

        $entity = $this->loadCourse($course, $courseMapper);
        $this->checkCourseFields($course, $entity);

        $savedSkillLinks = $entity->relation('skillLinks');
        $this->assertEquals(count($course->getSkills()), count($savedSkillLinks));
        foreach ($course->getSkills() as $index => $skill) {
            /**
             * @var CourseSkillEntity $savedSkillLink
             */
            $savedSkillLink = $savedSkillLinks[$index];
            $this->assertEquals($skill->getId(), $savedSkillLink->get('atomicSkillId'));
            $this->assertEquals($skill->getLevel(), $savedSkillLink->get('level'));
        }
    }

    public function testUpdateFields() {
        $locator = Database::getTest();
        $course = $this->getTestCourse();

        $expectedName = 'Новое название';
        $expectedCode = 'novoe-nazvanie';
        $expectedLength = 77;

        /**
         * @var CourseMapper $courseMapper
         */
        $courseMapper = $locator->mapper(CourseEntity::class);
        $saveResult = $courseMapper->saveCourse($course);
        $this->assertTrue($saveResult);

        $course->setName($expectedName);
        $course->setLengthDays($expectedLength);
        $course->updateCodeByName();

        $entity = $this->loadCourse($course, $courseMapper);
        $oldId = $entity->get('id');

        $updateResult = $courseMapper->saveCourse($course);
        $this->assertTrue($updateResult);

        $entity = $this->loadCourse($course, $courseMapper);
        $this->assertEquals($oldId, $entity->get('id'));
        $this->assertEquals($expectedCode, $entity->get('code'));
        $this->checkCourseFields($course, $entity);
    }

    public function testAddSkill() {
        $locator = Database::getTest();
        $course = $this->getTestCourse();
        $expectedSkillCount = 3;
        $expectedSkillIds = ['40', '45', '46'];

        /**
         * @var CourseMapper $courseMapper
         */
        $courseMapper = $locator->mapper(CourseEntity::class);
        $saveResult = $courseMapper->saveCourse($course);
        $this->assertTrue($saveResult);

        $course->addSkill(Skill::fromArray(['id' => '46', 'level' => Skill::LEVEL_ABILITY]));
        $updateResult = $courseMapper->saveCourse($course);
        $this->assertTrue($updateResult);

        $entity = $this->loadCourse($course, $courseMapper);
        /**
         * @var SkillEntity[] $savedSkillLinks
         */
        $savedSkillLinks = $entity->relation('skillLinks');
        $this->assertEquals($expectedSkillCount, count($savedSkillLinks));

        $savedSkillIds = [];
        foreach ($savedSkillLinks as $savedSkillLink) {
            $savedSkillIds[] = $savedSkillLink->get('atomicSkillId');
        }

        $this->assertEquals($expectedSkillIds, $savedSkillIds);
    }

    public function testRemoveSkill() {
        $locator = Database::getTest();
        $course = $this->getTestCourse();
        $expectedSkillCount = 1;
        $expectedSkillIds = ['46'];

        /**
         * @var CourseMapper $courseMapper
         */
        $courseMapper = $locator->mapper(CourseEntity::class);
        $saveResult = $courseMapper->saveCourse($course);
        $this->assertTrue($saveResult);

        $course->setSkills([
            Skill::fromArray(['id' => '46', 'level' => Skill::LEVEL_ABILITY])
        ]);
        $updateResult = $courseMapper->saveCourse($course);
        $this->assertTrue($updateResult);

        $entity = $this->loadCourse($course, $courseMapper);
        /**
         * @var SkillEntity[] $savedSkillLinks
         */
        $savedSkillLinks = $entity->relation('skillLinks');
        $this->assertEquals($expectedSkillCount, count($savedSkillLinks));

        $savedSkillIds = [];
        foreach ($savedSkillLinks as $savedSkillLink) {
            $savedSkillIds[] = $savedSkillLink->get('atomicSkillId');
        }

        $this->assertEquals($expectedSkillIds, $savedSkillIds);
    }

    public function testAddRequirement() {
        $locator = Database::getTest();
        $course = $this->getTestCourse();
        $expectedRequirementCount = 2;
        $expectedRequirementIds = ['40', '46'];

        /**
         * @var CourseMapper $courseMapper
         */
        $courseMapper = $locator->mapper(CourseEntity::class);
        $saveResult = $courseMapper->saveCourse($course);
        $this->assertTrue($saveResult);

        $course->addRequirement(Skill::fromArray(['id' => '46', 'level' => Skill::LEVEL_ABILITY]));
        $updateResult = $courseMapper->saveCourse($course);
        $this->assertTrue($updateResult);

        $entity = $this->loadCourse($course, $courseMapper);
        /**
         * @var SkillEntity[] $savedRequirementLinks
         */
        $savedRequirementLinks = $entity->relation('requirementLinks');
        $this->assertEquals($expectedRequirementCount, count($savedRequirementLinks));

        $savedRequirementIds = [];
        foreach ($savedRequirementLinks as $savedRequirementLink) {
            $savedRequirementIds[] = $savedRequirementLink->get('atomicSkillId');
        }

        $this->assertEquals($expectedRequirementIds, $savedRequirementIds);
    }

    public function testRemoveRequirement() {
        $locator = Database::getTest();
        $course = $this->getTestCourse();

        $expectedRequirementCount = 1;
        $expectedRequirementIds = ['46'];

        /**
         * @var CourseMapper $courseMapper
         */
        $courseMapper = $locator->mapper(CourseEntity::class);
        $saveResult = $courseMapper->saveCourse($course);
        $this->assertTrue($saveResult);

        $course->setRequirements([
            Skill::fromArray(['id' => '46', 'level' => Skill::LEVEL_ABILITY])
        ]);
        $updateResult = $courseMapper->saveCourse($course);
        $this->assertTrue($updateResult);

        $entity = $this->loadCourse($course, $courseMapper);
        /**
         * @var SkillEntity[] $savedRequirementLinks
         */
        $savedRequirementLinks = $entity->relation('requirementLinks');
        $this->assertEquals($expectedRequirementCount, count($savedRequirementLinks));

        $savedRequirementIds = [];
        foreach ($savedRequirementLinks as $savedRequirementLink) {
            $savedRequirementIds[] = $savedRequirementLink->get('atomicSkillId');
        }

        $this->assertEquals($expectedRequirementIds, $savedRequirementIds);
    }

    public function testSearchByFilter() {
        $locator = Database::getTest();
        $filter = [
            "modeOfStudy" => "selfStudy",
            "courseForm"  => "video",
            "certificate" => "1",
            "skills"      => [
                "354" => "knowledge",
                "380" => "skill",
            ],
            "requirements" => [
                "361" => "knowledge"
            ]
        ];

        /**
         * @var CourseMapper $courseMapper
         */
        $courseMapper = $locator->mapper(CourseEntity::class);
        $courses = $courseMapper->searchByFilter($filter);

        $filterHasCertificate = boolval($filter['certificate']);
        $this->assertNotEmpty($courses);
        $this->assertCount(2, $courses);
        foreach ($courses as $course) {
            $hasAnySkill = $course->hasSkillId(354) || $course->hasSkillId(380);
            $satisfiesRequirements = $course->hasRequirementId(361) || count($course->getRequirements()) === 0;

            $this->assertEquals($filter['modeOfStudy'], $course->getModeOfStudy());
            $this->assertEquals($filter['courseForm'], $course->getCourseForm());
            $this->assertEquals($filterHasCertificate, $course->hasCertificate());
            $this->assertTrue($hasAnySkill);
            $this->assertTrue($satisfiesRequirements);
        }
    }

    public function testSearchByFilterSkillsRequirements() {
        $locator = Database::getTest();
        $filter = [
            "skills"      => [
                "354" => "knowledge",
                "380" => "knowledge",
            ],
            "requirements" => [
                "361" => "knowledge"
            ]
        ];

        /**
         * @var CourseMapper $courseMapper
         */
        $courseMapper = $locator->mapper(CourseEntity::class);
        $courses = $courseMapper->searchByFilter($filter);

        foreach ($courses as $course) {
            $givesFirstSkill = $course->givesSkillHigherThan(354, $filter['skills'][354]);
            $givesSecondSkill = $course->givesSkillHigherThan(380, $filter['skills'][380]);
            $givesRequestedSkills = $givesFirstSkill || $givesSecondSkill;
            $this->assertTrue( $givesRequestedSkills );
            $this->assertTrue( $course->requiresSkillLessThan(361, $filter['requirements'][361]) );
        }
    }

    public function checkCourseSkill(Course $course, array $skills) {
        $givesAnyRequestedSkills = false;

        foreach ($skills as $skillId => $level) {
            $givesAnyRequestedSkills = $givesAnyRequestedSkills || $course->givesSkillHigherThan($skillId, $level);
            $this->assertTrue( $course->requiresSkillLessThan($skillId, $level) );
        }

        $this->assertTrue( $givesAnyRequestedSkills );
    }

    public function testUserSkills() {
        $locator = Database::getTest();
        $filter = [
            "userSkills" => [
                "354" => "knowledge",
                "380" => "knowledge",
            ]
        ];

        /**
         * @var CourseMapper $courseMapper
         */
        $courseMapper = $locator->mapper(CourseEntity::class);
        $courses = $courseMapper->searchByFilter($filter);

        foreach ($courses as $course) {
            $this->checkCourseSkill($course, $filter['userSkills']);
        }

        $databaseFilter = [
            "userSkills" => [
                "90"  => "knowledge",
                "105" => "knowledge",
            ],
        ];

        $databaseCourses = $courseMapper->searchByFilter($databaseFilter);
        $this->assertCount(5, $databaseCourses);
        foreach ($databaseCourses as $course) {
            $this->checkCourseSkill($course, $databaseFilter['userSkills']);
        }

        $gitFilter = [
            "userSkills" => [
                "194" => "none",
                "195" => "none",
                "196" => "none",
                "197" => "none",
                "199" => "none",
                "200" => "none",
                "390" => "none",
                "391" => "none",
                "392" => "none",
                "393" => "none",
                "394" => "none",
            ],
        ];

        $gitCourses = $courseMapper->searchByFilter($gitFilter);
        $this->assertCount(2, $gitCourses);
        foreach ($gitCourses as $course) {
            $this->checkCourseSkill($course, $gitFilter['userSkills']);
        }
    }

    public function testEduProvider() {
        $locator = Database::getTest();
        $filter = [
            "eduProvider" => ["stepik"]
        ];

        /**
         * @var CourseMapper $courseMapper
         */
        $courseMapper = $locator->mapper(CourseEntity::class);
        $courses = $courseMapper->searchByFilter($filter);

        foreach ($courses as $course) {
            $this->assertEquals("stepik", $course->getEduProvider()->getCode());
        }
    }

    public function saveVisitHelper(Locator $locator, string $courseCode, string $userUuid, string $sessionUuid) {
        /**
         * @var CourseMapper $courseMapper
         * @var UserMapper $userMapper
         */
        $courseMapper = $locator->mapper(CourseEntity::class);
        $userMapper = $locator->mapper(UserEntity::class);

        $course = $courseMapper->getByCode($courseCode);
        $user = $userMapper->getByUuid($userUuid);
        $session = Session::fromArray([
            'uuid' => $sessionUuid,
            'user' => $user
        ]);

        return $courseMapper->saveVisit($course, $session);
    }

    public function testSaveVisitAllExists() {
        $expectedCourseId = 26; //vvedenie-v-bazy-dannyh
        $expectedSessionId = 5; //5faac8d1-f3eb-4eeb-bdbb-b5e53f999326
        $expectedUserId = 2; //da8c4a60-f28d-49fc-a6c2-1a6924bbf0bf

        $locator = Database::getTest();
        $saveResult = $this->saveVisitHelper($locator, 'vvedenie-v-bazy-dannyh', 'da8c4a60-f28d-49fc-a6c2-1a6924bbf0bf', '5faac8d1-f3eb-4eeb-bdbb-b5e53f999326');

        $visitMapper = $locator->mapper(CourseVisitEntity::class);
        $visitEntity = $visitMapper->first(['courseId' => $expectedCourseId]);

        $this->assertTrue($saveResult);
        $this->assertEquals($expectedCourseId, $visitEntity->get('courseId'));
        $this->assertEquals($expectedUserId, $visitEntity->get('userId'));
        $this->assertEquals($expectedSessionId, $visitEntity->get('sessionId'));
    }

    public function testSaveVisitNoneExists() {
        $expectedCourseId = 26; //vvedenie-v-bazy-dannyh
        $expectedSessionId = 6; //18dec1a3-d6d2-4a39-a295-1cb96803090e
        $expectedUserId = 3; //7b5c4dce-bf5d-4145-964b-193d636ff2ce

        $locator = Database::getTest();
        $saveResult = $this->saveVisitHelper($locator, 'vvedenie-v-bazy-dannyh', '7b5c4dce-bf5d-4145-964b-193d636ff2ce', '18dec1a3-d6d2-4a39-a295-1cb96803090e');

        $visitMapper = $locator->mapper(CourseVisitEntity::class);
        $visitEntity = $visitMapper->first(['courseId' => $expectedCourseId]);

        $this->assertTrue($saveResult);
        $this->assertEquals($expectedCourseId, $visitEntity->get('courseId'));
        $this->assertEquals($expectedUserId, $visitEntity->get('userId'));
        $this->assertEquals($expectedSessionId, $visitEntity->get('sessionId'));
    }
}