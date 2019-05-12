from PySide import QtCore, QtGui
import sys
from ui import Ui_Dialog


# Create app
app = QtGui.QApplication(sys.argv)

# Create form and init UI
Dialog = QtGui.QDialog()
ui = Ui_Dialog()
ui.setupUi(Dialog)
Dialog.show()

# Logic of app



# Run main loop
sys.exit(app.exec_())