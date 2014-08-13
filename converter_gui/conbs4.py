import requests
from bs4 import BeautifulSoup

#url = "http://www.advfn.com/p.php?pid=fxcalculate&action=convert&amount=10&from=EUR&to=USD&btn=Convert"

'''for link in links:
	if "http" in link.get("href"):
		print "<a href='%s'>%s</a>" %(link.get("href"), link.text)'''
def convert(a,o,n):
	def converturl(amount, old, new):
		url = "http://www.advfn.com/p.php?pid=fxcalculate&action=convert&amount=" + str(amount) + "&from=" + str(old) + "&to=" + str(new) +"&btn=Convert"
		return url
	new_url = converturl(a,o,n)
	r = requests.get(new_url)
	soup = BeautifulSoup(r.content)
	links = soup.find_all("a")
	data = soup.find_all("div", {"id":"rs_to_price"})
	a=''
	for item in data:  
		print(item.text)
		a+=item.text
	return a