# GitHub notes

### WebDev/Open Source.docx

GitHub Repos:

- PR’s need to be easy to review & understand - Keep PR’s small but still adding value -
- Commits: when you are done with your change – commits are save points
- Branches: copy of the repo, mutiple commits, then make a PR into the default branch -
- Tag: is a collection of commits & a save point – they are like a release – a tag or release is read-only
- Description: add one for each project – add Topics – add a License & Readme -
- Contribution: check the issues tab – on a repo or the main one on GH – search by specific Labels – like “good first issue” and “javascript” – then when you find one, check the closed issues and PRs: PRs that were closed but not merged – that’s why you raise an issue first b4 starting the work -
- Labels: used to find your repos - need issues with labels – javascript,
- Issues – big repos have templates – you can give then Labels -
- Titles: concise and no more than 1 line long – use Markdown - @someone -
- Pull Requests: very similar to issues except it has a code # and an extra tab called Files Changed -
- Actions: triggers on GitHub events – there are free ones on Marketplace > Actions – You’ll need a .yml file and GitHub will create a GitHub secret token for you
- Project:
- Insights: Community link -
- Discussions:
- find gist: https://gist.github.com/username/

[How to Contribute to Open Source Projects](https://www.freecodecamp.org/news/how-to-contribute-to-open-source-projects-beginners-guide/)

Must have elements in all OS projects:

- License: If a project does not have an open-source license, then it is not open source. The license helps protect contributors and users. Businesses and savvy developers usually won't touch a project without this protection: [Choose an open source license](https://choosealicense.com/)
- README file: explains how to get started with a project. It lists the requirements for contributing to the project, the steps to take to contribute to the project etc... A good README should contain everything a potential contributor would want to know about the project
- Contribution Guidelines: These are guidelines that help people who contribute to the project know exactly what is expected from them. And even though it's not mandatory is always a good practice to add one - Contributor guidelines template: [contributor guidelines](https://opensource.com/life/16/3/contributor-guidelines-template-and-tips)
- Code of Conduct: a document that establishes your expectations for how your contributors and participants behave. Adopting and enforcing a code of conduct can help create a positive and welcoming environment for your community: [Code of Conduct](https://opensource.guide/code-of-conduct/)

use tools like:

- Issue Tracker – a contributor can create an issue and link it to a pull request and fellow contributors can opt in to try and fix it. Then after it's fixed it's closed
- Pull Requests - tell others about changes you've pushed to a branch in a repository on GitHub. Once a pull request is opened, you can discuss and review the potential changes with the collaborator and add follow-up commits before the're merged into the base branch
- Chat Channel - meant for people to share their ideas and have conversations. Some of the most common media for this purpose include Slack and Discord

Open Source Sources:

- [FIRST TIMERS ONLY](https://www.firsttimersonly.com/)
- [First Contributions](https://github.com/firstcontributions/first-contributions)
- [Contributing to Open Source](https://github.com/freeCodeCamp/how-to-contribute-to-open-source)
- [AstroChart](https://github.com/AstroDraw/AstroChart)
- [Good First Issues](https://github.com/iedr/goodfirstissues)
- [Pull Requests](https://24pullrequests.com/)
- [open source projects](https://www.codetriage.com/)

### How to choose an Open-Source Project

1. check if it has a license,
2. check the date of the last commit (is it recent?),
3. check the # of contributors,
4. how often do they make commits?
5. Also, look for: 1) open issues, 2) time for maintainers to respond, 3) are there active discussions, 4) are issues closed regularly, 5) are there open pull requests,

- Pull Requests: 1) fork repo, 2) Clone it to your local machine, 3) create a branch, 4) make changes, 5) then add, commit, git push origin branch name,
- Tip: search the project for “To Do” or “ToDo” or “To-Do”- they often get forgotten about – find one, raise an issue, then fix it -
- 1. go to the issues tab on any repo and filter for first timers only – 2. check the issues on github main and filter by a label by clicking on it → click issues then remove author:kernix to see all of github then click a label – try: is:open is:issue archived:false label:"good first issue" language"javascript"
- Another Tip: search the project for “To Do” or “ToDo” or “To-Do”- they often get forgotten about – find one, raise an issue, then fix it -
- NOTE: to get your PR merged keep it small and concise – to get feedback on your work sooner then “raise” the PR – do this: on right under Reviewer section you can convert your request to a draft – so do that when you are not quite finished yet and always have a checjlist as well – when you are done convert back to a normal PR -
- look into `yaml` config files
- GitHub Actions
