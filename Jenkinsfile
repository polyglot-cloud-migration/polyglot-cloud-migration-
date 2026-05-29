pipeline {
    agent any

    environment {
        DOCKER_HUB_USER = 'fatimacloud26'
        VM_IP = '20.205.30.136'
        VM_USER = 'azureuser'
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/polyglot-cloud-migration/polyglot-cloud-migration-.git'
            }
        }

        stage('Pull Latest Images') {
            steps {
                sh '''
                    docker pull fatimacloud26/backend-dotnet:latest
                    docker pull fatimacloud26/frontend-js:latest
                    docker pull fatimacloud26/worker-python:latest
                '''
            }
        }

        stage('Deploy to Cloud VM') {
            steps {
                sshagent(credentials: ['cloud-vm-key']) {
                    sh '''
                        ssh -o StrictHostKeyChecking=no azureuser@20.205.30.136 "
                            cd /home/azureuser/polyglot-cloud-migration- &&
                            docker compose -f docker-compose.prod.yml pull &&
                            docker compose -f docker-compose.prod.yml up -d
                        "
                    '''
                }
            }
        }

        stage('Health Check') {
            steps {
                sh 'sleep 10'
                sh 'curl -f http://20.205.30.136:3000 || exit 1'
            }
        }
    }

    post {
        success {
            echo 'Deployment Successful!'
        }
        failure {
            echo 'Deployment Failed!'
        }
    }
}
