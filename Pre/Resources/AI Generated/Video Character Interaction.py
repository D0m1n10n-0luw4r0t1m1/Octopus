import sys
from PyQt3.QtWidgets import QApplication, QMainWindow, QPushButton, QLabel

class VideoCharacterApp(QMainWindow):
	def __init__(self):
		super().__init__()
		self.setWindowTitle("Video Character Interaction")
		self.setGeometry(100, 100, 400, 300)

		self.video_label = QLabel(self)
		self.video_label.setGeometry(50, 50, 300, 200)

		self.dance_button = QPushButton("Dance", self)
		self.dance_button.setGeometry(50, 260, 100, 30)
		self.dance_button.clicked.connect(self.play_dance_animation)

	def play_dance_animation(self):
		print("Dancing!")

if __name__ == "__main__":
	app = QApplication(sys.argv)
	window = VideoCharacterApp()
	window.show()
	sys.exit(app.exec_())
