from Tkinter import *
import requests
from bs4 import BeautifulSoup
from conbs4 import convert
from functools import partial

class App:  
	def __init__(self):
		self.master = Tk()
		self.master.title('Currency Converter')
		Label(self.master, text="Currency to convert from").grid(row=0)
		Label(self.master, text="Currency to convert to").grid(row=1)
		Label(self.master, text="Amount to convert").grid(row=2)
		Label(self.master, text='New Amount').grid(row=3)

		self.v1=StringVar()
		self.v2=StringVar()
		self.v3=StringVar()
		self.e1 = Entry(self.master,textvariable = self.v1)
		self.e2 = Entry(self.master,textvariable = self.v2)
		self.e3 = Entry(self.master, textvariable = self.v3)
		self.master.configure(bg='cyan')  

		#setting as default
		self.e1.insert(0,'USD')
		self.e2.insert(0,'CNY')
		self.e3.insert(0,'10')

		self.c = convert(self.v3.get(),self.v1.get(),self.v2.get())

		self.b1 = Button(self.master,text='Convert', command = self.printvar)
		self.b1.pack()
		self.m = StringVar()
		self.m1 = Message(self.master,textvariable = self.m)
		self.m.set(self.c)

		self.e1.grid(row=0, column=1)
		self.e2.grid(row=1, column=1)
		self.e3.grid(row=2, column=1)
		self.b1.grid(row=3, column=2)
		self.m1.grid(row=3, column=1)

		self.master.mainloop()

	def printvar(self):
		self.a=convert(self.v3.get(),self.v1.get(),self.v2.get())
		self.m.set(self.a)
		return self.a

App()