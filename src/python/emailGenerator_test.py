import emailGenerator

people = [["Sanya", "Parry"], ["Maisey", "Santana"], ["Jade", "Driscoll"], ["Taslima", "Logan"]]
emails = []
for x in range(len(people)):
    emails.append(emailGenerator.email(people[x][0], people[x][1]))

people1 = [["Kaia", "Farrell"], ["Ayse", "Haines"], ["Sahara", "Zhang"]]
emails1 = []
for x in range(len(people1)):
    emails1.append(emailGenerator.email(people1[x][0], people1[x][1]))


def test_emailGenerator():
    assert emails[0] == "sanya.parry@evolveu.ca"
    assert emails[1] == "maisey.santana@evolveu.ca"
    assert emails1[2] == "sahara.zhang@evolveu.ca"
    assert emails1[0] == "kaia.farrell@evolveu.ca"