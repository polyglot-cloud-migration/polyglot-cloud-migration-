pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/polyglot-cloud-migration/polyglot-cloud-migration-.git'
            }
        }

        stage('Deploy to Cloud VM') {
            steps {
                sshagent(credentials: ['cloud-vm-key']) {
                    sh '''
                        ssh -o StrictHostKeyChecking=no azureuser@20.205.30.136 "
                            cd /home/azureuser/polyglot-cloud-migration- &&
                            docker-compose -f docker-compose.prod.yml pull &&
                            docker-compose -f docker-compose.prod.yml up -d
                        "
                    '''
                }
            }
        }

        stage('Health Check') {
            steps {
                sh 'sleep 15'
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
