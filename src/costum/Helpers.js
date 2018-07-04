/*
    Refactoring Helper Class
*/

export default class Helper {
  // converts string to regex specific for root terminal (terminal component)
  static convertToRegex(str) {
    return (
      `^(${
      str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")  // eslint-disable-line
      })` +
      '(.*)'
    );
  }

  static getPublicCommandsArr(commands) {
    // remove hidden commands
    let defaultCommands = commands.filter((cmds) => {
      if (!cmds.hidden) {
        return true;
      }
      return false;
    });

    defaultCommands = defaultCommands.map(cmds => cmds.command);
    return defaultCommands;
  }

  static getPublicCommandsObj(commands) {
    // remove hidden commands
    const defaultCommands = commands.filter((cmds) => {
      if (!cmds.hidden) {
        return true;
      }
      return false;
    });
    return defaultCommands;
  }

  // get distance of element to top of window (top and left)
  static getDistanceToTop(element) {
    let xPosition = 0;
    let yPosition = 0;

    xPosition += (element.offsetLeft - element.scrollLeft) + element.clientLeft;
    yPosition += (element.offsetTop - element.scrollTop) + element.clientTop;

    return { x: xPosition, y: yPosition };
  }
}
