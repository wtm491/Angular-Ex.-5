function NameService() {

    const service = this;

    service.setName = (newName) => {
        service.name = newName; 
        console.log(service.name); 
    }


    service.getName = () => {
        return service.name;
    }

}

angular.module("NameApp")
.service("NameService", NameService)