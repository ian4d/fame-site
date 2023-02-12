---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
title: Fame!
publish_date: 000000000000000
---


<div id="containerBody">
    <div id="sectionCurrentPost">
        <div id="title" class="titleText">TITLE</div>
        <div id="content" class="subheaderText">CONTENT</div>
    </div>
    <div id="sectionNoPosts" class='hidden'>
        <div class="titleText">“Don't think about making art, just get it done. Let everyone else decide if it's good or bad, whether they love it or hate it. While they are deciding, make even more art.”
        </div>
        <div class="subheaderText">- Andy Warhol</div>
        <div class="bodyText">
        Nobody else is making art here right now so why don't you?
                        <p>
        <a class="navLink" href="/post/">I'm ready for my close-up!</a>
        </p>
        </div>
    </div>
</div>



<script language="javascript" id="postSelector">

    const params = new Proxy(new URLSearchParams(window.location.search), {
        get: (searchParams, prop) => searchParams.get(prop),
    });
    var enableFilter = params.enableFilter === 'true' || false;
    var currentTimeMillis = Number(params.currentTimeMillis) || Date.now();

    var unfilteredSearchIndex = [
    {% for post in site.posts %}
        {
            date: {
                startDate: Number({{ post.publish_date | date: '%s' }}),
                endDate: Number({{ post.end_date | date: '%s' }})
            },
            excerpt: "{{ post.excerpt | strip_html | escape | strip }}",
            title: "{{ post.title | escape }}",
            url: "{{ site.baseurl }}{{ post.url }}",
            content: "{{ post.content | strip_html | escape | strip }}"
        },
        {% unless forloop.last %}{% endunless %}
    {% endfor %}
    ];

    let searchIndex = [];
    if (enableFilter) {
        searchIndex = unfilteredSearchIndex.filter(obj => obj.date.startDate <= currentTimeMillis && obj.date.endDate > currentTimeMillis);
    }
    if (searchIndex.length > 0) {
        searchIndex.sort((a, b) => (a.date.startDate - currentTimeMillis) < (b.date.startDate - currentTimeMillis));
        var post = searchIndex[0];
        var content = document.getElementById("content");
        content.innerHTML = post.content;
        var title = document.getElementById("title");
        title.innerHTML = post.title;
    } else {
        document.getElementById('sectionCurrentPost').classList.add('hidden');
        document.getElementById('sectionNoPosts').classList.remove('hidden');
    }
    var scriptTag = document.getElementById("postSelector");
    scriptTag.parentNode.removeChild(scriptTag);
</script>