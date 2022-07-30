# This is a comment

my_name = "Narciso Lobo"

my_age = 8

interest_rate = .2

my_age = "eight"

# lists
colors = ['red', 'blue', 'green']

# dictionaries
monster = {
    'id': 1,
    'name': 'Charizard',
    'types': ['fire', 'poison']
}

class Pet:
    def __init__(self, name):
        self.name = name

my_cat = Pet('patches')

print(my_cat.name)

print(monster['types'][0])

def print_1_to_255():
    for i in range(256):
        print(i)

# print_1_to_255()

if 1 == 1:
    print('equal')
else:
    print('not equal')

if 10 > 2:
    print('greater than')
elif 10 < 2:
    print('less than')