from tkinter import *
import requests

def serverReg(root):
	if password.get() != checkPassword.get():
		print ("You are gay and penis")
	else:
		req = requests.get('http://project.kiselyov.ml/auth.php?act=reg&login='+str (login)+'&password='+str (password))
		print (req.status_code)

root = Tk()

root.title("Регистрация")
root.geometry("400x300")

label1 = Label(text="Введите логин:")
label2 = Label(text="Введите пароль:")
label3 = Label(text="Введите заново пароль:")

login = Entry()
password = Entry()
checkPassword = Entry()
button = Button(text="Зарегистрироваться")

label1.grid(row=0, column=0, sticky=W)
label2.grid(row=1, column=0, sticky=W)
label3.grid(row=2, column=0)
login.grid(row=0, column=1)
password.grid(row=1, column=1)
checkPassword.grid(row=2, column=1)
button.grid(row=3, column=1)

button.bind('<Button-1>', serverReg)

root.mainloop()
