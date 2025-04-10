pipeline {
    agent any
    stages {
        stage('Build Backend') {
            steps {
                dir('backend') {
                    sh 'docker build -t backend-app:latest .'
                }
            }
        }
        stage('Build Frontend') {
            steps {
                dir('frontend') {
                    sh 'docker build -t frontend-app:latest .'
                }
            }
        }
        stage('Deploy') {
            steps {
                sh 'docker-compose up -d --build'
            }
        }
    }
}
