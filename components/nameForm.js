function nameForm () {

    const controller = this; 
    controller.getName = (newName) => {
        NameService.setName(newName); 
    }


}

angular.module("NameApp")
.component("nameForm", {
    template: `
        <div class = name-form>
            <input type = "text ng-model = "$ctrl.newName">
            
            <button type = "button" ng-click = "$crtl.setName($crtl.newName);">Save</button>

        </div>
    `,

});