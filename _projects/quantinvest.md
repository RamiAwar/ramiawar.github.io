---
layout: post
title: QuantInvest
date: 2019-03-19 23:00:00 +0000
description: Quantitative Investment Management Platform
categories:
- project
- finance
image: "/assets/images/quantinvest-border.png"
pdf: "/assets/pdfs/quantinvest_report.pdf"

---
QuantInvest is an online platform that helps investors explore the world of finance. The main features of the platform are a customizable portfolio optimizer, a stock screener and explorer, and a risk profiler. The live version of the project can be found at www.quantinvest.co. 

The risk profiler is an interactive questionnaire that guides the client through finding acceptable risk and return values for their investment. The portfolio optimizer uses historical market data to generate a portfolio with the previously accepted expected return and risk values. The third component is a portfolio explorer that allows the user to view the fundamental and technical data that supports the inclusion of each stock in the portfolio, while also allowing the user to modify the portfolio and backtest it immediately.

Technically speaking, the system is written in Python using the Flask microframework, running a Gunicorn web server. The lengthy jobs are processed using a message queuing server, where scalable workers pickup jobs upon availability and return the results to the queue. The frontend submits these requests and awaits responses using AJAX requests. The frontend is designed using vanilla HTML, CSS, and Javascript, and uses the Argon framework as a layout foundation. More details on software architecture can be found in the build report below.

The above mentioned features can be tried out at [QuantInvest](http://www.quantinvest.co).