from django.test import TestCase, Client
from django.urls import reverse, resolve

client = Client()
class TestView(TestCase):
    def test_webpage(self):
        query = "Say this is a test"
        url = reverse("polls:index", kwargs={"query": query})
        print ("url= " + url)
        response = client.get(url)
        self.assertEqual(response.status_code, 200)
        responseStr = str(response.content)
        print(responseStr)
        self.assertNotEqual(responseStr, None)
