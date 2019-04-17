const nameDisplay = {
    template: `
    <div>
      <button ng-click="$ctrl.getName()">Load</button>
      <p>{{ $ctrl.name }}</p>
    </div>
    `,
  
    controller: ["NameService", function(NameService) {
      
      const controller = this;

      controller.getName = ()=> {
        controller.name = NameService.getName();
      }

    }]
  }
  
  angular
    .module("NameApp")
    .component("nameDisplay", nameDisplay);