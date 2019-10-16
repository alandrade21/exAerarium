import { app } from 'electron';

import { InitializationController } from './initialization/InitializationController';
import { DEV_CONFIG_FOLDER_PATH } from './constants';
import { MainWindowController, envDetector, ErrorWrapper } from '@alandrade21/electron-arch';

app.on('ready', () => {

  try {

    // envDetector.printEnvironment();

    // It is necessary to create the window first in order to show the dialogs.
    MainWindowController.initialize();

    // Do the app initialization.
    const initController = new InitializationController('ExAerarium', DEV_CONFIG_FOLDER_PATH);
    initController.doConfig();

    if (MainWindowController.mainWindow) {
      MainWindowController.mainWindow.show();
    }
  } catch (e) {
    if (e instanceof ErrorWrapper) {
      (<ErrorWrapper>e).consoleLog();
    } else {
      console.log(e);
    }

    app.quit();
  }
});
