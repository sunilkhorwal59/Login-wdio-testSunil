pipeline {
    agent any
    tools {
        nodejs 'NodeJS' // Name of NodeJS tool in Jenkins (configure in Jenkins global tools)
    }
    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/sunilkhorwal59/Login-wdio-testSunil'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }
        stage('Run Tests') {
            steps {
                // Modify the command to run specific tests using --spec
                // Replace './path/to/your/successful/test1.js' and './path/to/your/successful/test2.js'
                // with the actual paths to the test files you want to run.
                sh 'npx wdio run wdio.conf.js --spec ./path/to/your/successful/test1.js --spec ./path/to/your/successful/test2.js'
            }
        }
        stage('Generate Allure Report') {
            steps {
                sh 'npx allure generate allure-results --clean -o allure-report'
            }
        }
    }
    post {
        always {
            allure includeProperties: false, jdk: '', results: [[path: 'allure-results']]
        }
    }
}
