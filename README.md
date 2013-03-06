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
5.  For each previous version of the docs, update the HTML to link to your
    new, latest version of the docs, as described below.
6.  Test your work.
7.  Publish.


# Pointing to Latest Docs

Readers who arrive at the docs from a direct link might not know that a
more recent release is available. Therefore, when you publish docs for a new
release, update existing HTML docs to make sure there is a banner pointing to
your new version.

You do this by adding a `<div>` just after the `<body>` tag in all the
published HTML docs for the product, which looks like this:

    <body bgcolor="white" text="black" link="#0000FF" vlink="#840084" alink="#0000FF">

For the next-to-last release, add the `<div>` right after this tag. For example
if you are publishing OpenIDM 2.2.0 docs and the latest release was 2.1.0 up
to that point, your `<div>` looks like this (all on one line):

    <div><p class="cornerBanner"><a target="_blank" href="http://docs.forgerock.org/en/openidm/2.2.0/">v2.2.0 available</a></p></div>

For previous releases, replace the `<div>` that already exists with the new
`<div>` you used for the next-to-last release. In the case of OpenIDM 2.2.0,
that would be the docs for OpenIDM 2.0.2 and OpenIDM 2.0.3, which currently
have this `<div>` (all on one line):

    <div><p class="cornerBanner"><a target="_blank" href="http://docs.forgerock.org/en/openidm/2.1.0/">v2.1.0 available</a></p></div>

Notice that the `<p>` has `class="cornerBanner"`. The CSS styles that class to
put a ribbon banner in the top right corner of the pages. So be sure you do not
change that. Also notice `target="_blank"` on the `<a>`, which causes the
browser to open the link in a new tab or window, rather than replacing what the
reader is currently viewing.

Definitely do this step using an editor or IDE that lets you prepare, review,
and commit a global search replace across multiple files. If you find yourself
writing your own tool to make the changes, you are probably working too hard.
If you do it by hand, get in touch with me because you are obviously not busy
enough and I have some work to delegate to you. ;-)


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

Copyright 2011-2013 ForgeRock AS