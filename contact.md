---
layout: page
title: Contact
nav-menu: true
---

<!-- Contact -->
<section id="contact">
	<div class="inner">
		<section>
			<form action="https://formspree.io/{{ site.email }}" method="POST">
				<div class="field half first">
					<label for="name">Name</label>
					<input type="text" name="name" id="name" />
				</div>
				<div class="field half">
					<label for="email">Email</label>
					<input type="text" name="_replyto" id="email" />
				</div>
				<div class="field">
					<label for="message">Message</label>
					<textarea name="message" id="message" rows="6"></textarea>
				</div>
				<ul class="actions">
					<li><input type="submit" value="Send Message" class="special" /></li>
					<li><input type="reset" value="Clear" /></li>
				</ul>
			</form>
		</section>
		<section class="split">
			<section>
				<div class="contact-method">
					<span class="icon alt fa-envelope"></span>
					<h3>Email</h3>
					<a href="#">{{ site.email }}</a>
				</div>
			</section>
			<section>
				<div class="contact-method">
					<span class="icon alt fa-phone"></span>
					<h3>Phone</h3>
					<span>{{ site.phone }}</span>
				</div>
			</section>
			<section>
				<div class="contact-method">
					<span class="icon alt fa-home"></span>
					<h3>Address</h3>
					<span>
					{% if site.street_address %}
					    {{ site.street_address }}<br />
					{% endif %}
					{% if site.city %}
					    {{ site.city }},
					{% endif %}
					{% if site.state %}
					    {{ site.state }} 
					{% endif %}
					{% if site.zip_code %}
					    {{ site.zip_code }}<br />
					{% endif %}
					{% if site.country %}
					    {{ site.country }}
					{% endif %}
					</span>
				</div>
			</section>
		</section>
	</div>
</section>

<!-- Scripts -->
<script src="{{ "assets/js/jquery.min.js" | absolute_url }}"></script>
<script src="{{ "assets/js/jquery.scrolly.min.js" | absolute_url }}"></script>
<script src="{{ "assets/js/jquery.scrollex.min.js" | absolute_url }}"></script>
<script src="{{ "assets/js/skel.min.js" | absolute_url }}"></script>
<script src="{{ "assets/js/util.js" | absolute_url }}"></script>
<!--[if lte IE 8]><script src="{{ "assets/js/ie/respond.min.js" | absolute_url }}"></script><![endif]-->
<script src="{{ "assets/js/main.js" | absolute_url }}"></script>