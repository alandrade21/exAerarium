import { app } from 'electron';

import { InitializationController } from './initialization/InitializationController';
import { DEV_CONFIG_FOLDER_PATH } from './constants';
import { MainWindowController, envDetector } from '@alandrade21/electron-arch';

try {
  app.on('ready', () => {

    // envDetector.printEnvironment();

    // It is necessary to create the window first in order to show the dialogs.
    MainWindowController.initialize();

    // Do the app initialization.
    try {
      const initController = new InitializationController('ExHeroics', DEV_CONFIG_FOLDER_PATH);
      initController.doConfig();
    } catch (error) {
      app.quit();
      return;
    }

    if (MainWindowController.mainWindow) {
      MainWindowController.mainWindow.show();
    }
  });
} catch (e) {
  console.log(e);
  app.quit();
}
