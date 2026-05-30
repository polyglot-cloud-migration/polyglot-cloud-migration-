pipeline {
    agent any
    stages {
        stage('Pull Latest Images') {
            steps {
                echo 'Pulling latest Docker images...'
            }
        }
        stage('Deploy to Cloud VM') {
            steps {
                sshagent(['vm-ssh-key']) {
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
                sh 'curl -f http://20.205.30.136:3000 || echo "App is starting..."'
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