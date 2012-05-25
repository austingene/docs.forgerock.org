# The docs.forgerock.org Idea

The docs.forgerock.org idea is to have one location where we publish
finished core documentation for ForgeRock projects at the time they release.

*Publish* means put it up for public view, and leave it there.

*Finished* means the core doc set you publish has gone through documentation
[review](https://wikis.forgerock.org/confluence/display/devcom/Review+Process),
and deemed ready for publication by the person in charge of the release.

This is why the docs.forgerock.org idea is not implemented as a wiki:
Published core documentation is technically accurate and complete with
respect to the release. It is done and dusted, rather than a work in
progress.

You can log bugs and request enhancements. Those nearly always get
fixed in a subsequent release.

*Core documentation* refers to distilled content that helps readers understand
and implement best practices, that provides the definitive reference for the
software, that is built from source code committed to the project SCM alongside
other code, and that ForgeRock refers to as the official documentation for a
release.

Readers have other forms of documentation available to them, from IRC logs
and mail, blogs and wikis, to books and articles. docs.forgerock.org exists
alongside these alternatives.

*ForgeRock projects* are at <http://forgerock.org/>.



# Publishing Core Documentation

Publishing is a manual process for now.

1.  Run the `release` goal of the
    [forgerock-doc-maven-plugin](https://github.com/markcraig/forgerock-doc-maven-plugin)
    to prepare the release layout.
2.  When you are satisfied with the result, copy it to the proper location.
3.  Add links and a table of links for your new documentation set in the
    top-level `en/index.html` file.
4.  Update `js/docs.js` to include your product and version.
5.  Test your work.
6.  Publish.


# TODO

* Improve the look and feel.
* Published localized documentation.


* * *
This work is licensed under the Creative Commons
Attribution-NonCommercial-NoDerivs 3.0 Unported License.
To view a copy of this license, visit
<http://creativecommons.org/licenses/by-nc-nd/3.0/>
or send a letter to Creative Commons, 444 Castro Street,
Suite 900, Mountain View, California, 94041, USA.

Copyright 2011-2012 ForgeRock AS