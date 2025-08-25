# Engineering:
## Getting started
### Setup

#### Git Handle
Since our source code is stored on Github, you need a Github handle to contribute. There are two options:

1. Use personal Github handle (**recommended**): Add your Better work email as [secondary email to your Github](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-user-account/managing-email-preferences/adding-an-email-address-to-your-github-account) handle.

```
$ git config --global user.name <YOUR NAME>
$ git config --global user.email <YOUR WORK EMAIL>
```

This way, you build your personal Github profile while doing commit on behalf of the company.

2. Create a separate Better specific Github handle.

#### Git Config
We also recommend you to update your Git config locally as follows, see why [here](https://spin.atomicobject.com/git-configurations-default):

```
git config --global pull.rebase true
git config --global fetch.prune true
git config --global diff.colorMoved zebra
```

####  IDE
Every team member has their preference but we generally use VSCode. Please also install a [prettier plugin](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) to make sure the code you write in any project is well formatted.

## Working at Better:
Software engineering is much more than writing good code. Ultimately, software should help a company achieve its goals and make money, both from new and existing sources. If it doesn't do that, it's not fulfilling its purpose. When software developers understand the business better, they can ask "why" more often. They can question the requirements and design to understand where the project fits into the business' overall goals. With this knowledge, they can make informed decisions about the product based on data. By being more engaged, developers can earn the client's trust, take more ownership, and hopefully create a successful product. Here are some key traits of product-minded engineers:

1. They suggest product ideas and opinions, not just follow specifications.
2. They understand the business, user behavior, and relevant data.
3. They're curious and want to understand the "why" behind things.
4. They communicate well and build relationships with non-engineers.
5. They consider trade-offs between product and engineering.
6. They handle edge cases practically, reducing unnecessary work.
7. They seek early feedback to validate product features.
8. They take end-to-end ownership of features and care about real-world results.

_Imagine a situation where 60% of users are on small laptops, but the development team uses 4K retina screens. And they discovered that the content they had developed was too big for the average user’s smaller screens and was forcing them to scroll._

Understanding the user base in this scenario can lead to better product development. Knowing how users interact with a product can help developers push back on client requests or suggest better resource usage. Software engineers should also regularly review user analytics to understand the audience and their behaviors. Tools like Google Analytics and error reporting help with this.

### Better Github Templates
We maintain [flask-react-template](github.com/jalantechnologies/flask-react-template) and [react-native-template](https://github.com/jalantechnologies/react-native-template) to bootstrap new applications for web and mobile respectively. We recommend you to make sure you understand the templates, and more importantly "why" behind the architecture decision made. These two videos would give a basic overview:
- [How to build maintainable frontends that future dev's would thank you for](https://www.loom.com/share/c4352f7c0be949e8bc0377dbcba15daa)
- [How we think about building backend](https://www.loom.com/share/e51d50cd8bec4851a2a8718bdc6e34d5)

###  Raising PRs
We encourage you to raise your PR daily, push your changes, once you are done for the day, a PR on Github to merge these changes against the master/main branch. In general, we recommend you to make sure you follow below guidelines:

- [Things to watch out for when raising PRs](/engineering/pr-etiquette)
- [How to write better code comments](https://dev.to/adammc331/todo-write-a-better-comment-4c8c)
- [How to name your automated tests](https://markus.oberlehner.net/blog/naming-your-unit-tests-it-should-vs-given-when-then/)
- [How to write better git commit messages](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716)
- [How to keep your code healthy](https://medium.com/@learnstuff.io/broken-window-theory-in-software-development-bef627a1ce99)


### Important soft skills to pay attention to
1.  Avoiding repetition of mistakes: While mistakes are a natural part of the learning process, we value individuals who can take feedback, learn from their mistakes and apply that knowledge to prevent repetition.
2.  Learning aptitude: We look for individuals who have the ability to learn new concepts and technologies in-depth, and apply their knowledge to create high-quality solutions. Strong fundamentals are a plus.
3.  Problem-solving: We value team members who can find solutions to their problems independently, particularly with regard to out-of-the-box technologies.
4.  Code quality: As an engineering company, we prioritize craftsmanship in code writing and look for individuals who have a strong understanding of object-oriented programming principles.
5.  Communication: Effective communication is essential in the workplace. We place a high value on team members who can clearly and concisely convey their thoughts and ideas.
6.  Commitment: We look for individuals who can be relied upon to deliver on their commitments and support the team and customers alike.

## Appendix:
- [Lead Roles & Responsibilities](/engineering/lead)
