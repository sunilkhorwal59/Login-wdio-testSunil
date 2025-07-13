pipeline {
    agent any
    tools {
        nodejs 'NodeJS' // Name of NodeJS tool in Jenkins (configure in Jenkins global tools)
    }
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/sunilkhorwal59/Login-wdio-testSunil'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npx wdio run wdio.conf.js'
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
