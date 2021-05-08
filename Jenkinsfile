pipeline {
    agent any
    environment{
        DOCKER_TAG = getDockerTag()
     
        IMAGE_URL_WITH_TAG = "/greenredblue/webuyg1:${DOCKER_TAG}"
    }
    stages{
        stage('Build Docker Image'){
            steps{
                
                 echo ${DOCKER_TAG}
                 
            }
        }
   
        }
       
 
    
}

def getDockerTag(){
    def tag  = sh script: 'git rev-parse HEAD', returnStdout: true
    echo tag
    return tag
}
