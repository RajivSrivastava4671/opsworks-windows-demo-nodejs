include header.html

#x.container
  #x.hero-unit
    p
      | This app runs on #{hostname} (#{os}). Your request came from #{agent}.
      | The system time is #{time.toLocaleString()}.
      |  <strong>Page rendered using Node.js version #{nodeversion}</strong>.

#form-section.container
  #x.hero-unit
    form(method="post" class="comment-form")
      label(for="comment") Leave a comment
        input(type="text", name="comment" required="true" autocomplete="off")
      input(type="submit", value="Send")
    
    ul(class="comments")
      each comment in comments.reverse()
        li
          p(class="comment-content")= comment.text
          p(class="comment-date")= (new Date(comment.date)).toLocaleString()

#x.container
  #x.hero-unit
    p
      | Contact site admin via: <a href="mailto:#{admin}">#{admin}</a>

include footer.html