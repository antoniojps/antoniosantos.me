/*
    Refactoring Helper Class
*/

export default class Helper {
  // converts string to regex specific for root terminal (terminal component)
  static convertToRegex(str) {
    return (
      "^(" +
      str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&") + // eslint-disable-line
      ")" +
      "(.*)"
    );
  }

  static getPublicCommandsArr(commands){
    // remove hidden commands
    let defaultCommands = commands.filter((cmds)=>{
      if(!cmds.hidden){
        return true;
      }
    });
    
    defaultCommands = defaultCommands.map((cmds) =>cmds.command);
    return defaultCommands;
  }

  static getPublicCommandsObj(commands){
    // remove hidden commands
    let defaultCommands = commands.filter((cmds)=>{
      if(!cmds.hidden){
        return true;
      }
    });
    return defaultCommands;
  }

  // get distance of element to top of window (top and left)
  static getDistanceToTop(element) {
    var xPosition = 0;
    var yPosition = 0;

    while (element) {
      xPosition += element.offsetLeft - element.scrollLeft + element.clientLeft;
      yPosition += element.offsetTop - element.scrollTop + element.clientTop;
      element = element.offsetParent;
    }

    return { x: xPosition, y: yPosition };
  }
}
