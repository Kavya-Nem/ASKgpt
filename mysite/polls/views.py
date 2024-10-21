from openai import OpenAI
from pathlib import Path
from django.http import HttpResponse

client = OpenAI(
    organization='org-xyx1YTc5MKAo2tXY5jPnibUs',
    api_key="API_KEY_HERE"
)

def process_request(request):
    response = ""
    stream = client.chat.completions.create(
        model = "gpt-3.5-turbo",
        messages = [{"role": "user", "content": request}],
        stream = True,
    )

    for chunk in stream:
        if chunk.choices[0].delta.content is not None:
            response += (chunk.choices[0].delta.content)
    return response
def index(request, query):
    response = process_request(query)
    httpResponse = HttpResponse(response)
    return httpResponse
