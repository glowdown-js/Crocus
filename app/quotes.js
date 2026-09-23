/* ============================================================
 * quotes.js — Crocus quote library
 * ------------------------------------------------------------
 * 1000 quotes, tagged. Delivered in 10 batches of 100.
 * Tone: calm, contemplative, botanical. No hustle-culture.
 * License: public domain / CC0. Use, edit, translate freely.
 *
 * Load order in index.html:
 *   <script src="quotes.js"></script>
 *   <script> /* main app *\/ </script>
 *
 * Data shape: { q: "text", a: "author", t: "tag" }
 * Tags: focus | calm | begin | persist | rest | reflect
 *       courage | patience | wonder | presence
 * ============================================================ */

window.focusQuotes = [

/* ?? FOCUS ?????????????????????????????????????????? 1–10 */
{ q: "The successful warrior is the average man, with laser-like focus.", a: "Bruce Lee", t: "focus" },
{ q: "Concentrate all your thoughts upon the work in hand.", a: "Alexander Graham Bell", t: "focus" },
{ q: "It is not the daily increase but the daily decrease. Hack away at the unessential.", a: "Bruce Lee", t: "focus" },
{ q: "The main thing is to keep the main thing the main thing.", a: "Stephen Covey", t: "focus" },
{ q: "You will never reach your destination if you stop and throw stones at every dog that barks.", a: "Winston Churchill", t: "focus" },
{ q: "What you stay focused on will grow.", a: "Roy T. Bennett", t: "focus" },
{ q: "Do every act of your life as though it were the very last act of your life.", a: "Marcus Aurelius", t: "focus" },
{ q: "The shorter way to do many things is to do only one thing at a time.", a: "Wolfgang Amadeus Mozart", t: "focus" },
{ q: "Attention is the rarest and purest form of generosity.", a: "Simone Weil", t: "focus" },
{ q: "Starve your distractions, feed your focus.", a: "Anonymous", t: "focus" },

/* ?? CALM ??????????????????????????????????????????? 11–20 */
{ q: "The quieter you become, the more you can hear.", a: "Ram Dass", t: "calm" },
{ q: "Within you, there is a stillness and a sanctuary to which you can retreat at any time.", a: "Hermann Hesse", t: "calm" },
{ q: "Quiet the mind, and the soul will speak.", a: "Ma Jaya Sati Bhagavati", t: "calm" },
{ q: "Breathe. Let go. And remind yourself that this very moment is the only one you know you have for sure.", a: "Oprah Winfrey", t: "calm" },
{ q: "Nothing in the world is softer than water, yet nothing is better at overcoming the hard and strong.", a: "Lao Tzu", t: "calm" },
{ q: "Your calm mind is the ultimate weapon against your challenges.", a: "Bryant McGill", t: "calm" },
{ q: "Do not let the behavior of others destroy your inner peace.", a: "Dalai Lama", t: "calm" },
{ q: "Silence is a source of great strength.", a: "Lao Tzu", t: "calm" },
{ q: "The mind is like water. When it is agitated, it becomes difficult to see. But if you allow it to settle, the answer becomes clear.", a: "Anonymous", t: "calm" },
{ q: "Wherever you are, be there totally.", a: "Eckhart Tolle", t: "calm" },

/* ?? BEGIN ?????????????????????????????????????????? 21–30 */
{ q: "The journey of a thousand miles begins with one step.", a: "Lao Tzu", t: "begin" },
{ q: "A year from now you may wish you had started today.", a: "Karen Lamb", t: "begin" },
{ q: "The secret of getting ahead is getting started.", a: "Mark Twain", t: "begin" },
{ q: "You don't have to be great to start, but you have to start to be great.", a: "Zig Ziglar", t: "begin" },
{ q: "Begin anywhere.", a: "John Cage", t: "begin" },
{ q: "The seed grows in the dark before it breaks the soil.", a: "Crocus", t: "begin" },
{ q: "Whatever you can do, or dream you can, begin it. Boldness has genius, power and magic in it.", a: "Johann Wolfgang von Goethe", t: "begin" },
{ q: "Start where you are. Use what you have. Do what you can.", a: "Arthur Ashe", t: "begin" },
{ q: "Every moment is a fresh beginning.", a: "T.S. Eliot", t: "begin" },
{ q: "Do not wait to strike till the iron is hot; but make it hot by striking.", a: "William Butler Yeats", t: "begin" },

/* ?? PERSIST ???????????????????????????????????????? 31–40 */
{ q: "It does not matter how slowly you go as long as you do not stop.", a: "Confucius", t: "persist" },
{ q: "Fall seven times, stand up eight.", a: "Japanese Proverb", t: "persist" },
{ q: "The impediment to action advances action. What stands in the way becomes the way.", a: "Marcus Aurelius", t: "persist" },
{ q: "Little by little, one travels far.", a: "J.R.R. Tolkien", t: "persist" },
{ q: "Perseverance is not a long race; it is many short races one after the other.", a: "Walter Elliot", t: "persist" },
{ q: "Rock bottom became the solid foundation on which I rebuilt my life.", a: "J.K. Rowling", t: "persist" },
{ q: "Courage doesn't always roar. Sometimes it's the quiet voice at the end of the day saying, 'I will try again tomorrow.'", a: "Mary Anne Radmacher", t: "persist" },
{ q: "The bamboo that bends is stronger than the oak that resists.", a: "Japanese Proverb", t: "persist" },
{ q: "Great things are done by a series of small things brought together.", a: "Vincent van Gogh", t: "persist" },
{ q: "Endurance is not just the ability to bear a hard thing, but to turn it into glory.", a: "William Barclay", t: "persist" },

/* ?? REST ??????????????????????????????????????????? 41–50 */
{ q: "Almost everything will work again if you unplug it for a few minutes, including you.", a: "Anne Lamott", t: "rest" },
{ q: "Take rest; a field that has rested gives a bountiful crop.", a: "Ovid", t: "rest" },
{ q: "Sleep is the best meditation.", a: "Dalai Lama", t: "rest" },
{ q: "Rest is not idleness, and to lie sometimes on the grass under trees on a summer's day is by no means a waste of time.", a: "John Lubbock", t: "rest" },
{ q: "There is virtue in work and there is virtue in rest. Use both and overlook neither.", a: "Alan Cohen", t: "rest" },
{ q: "Sometimes the most productive thing you can do is relax.", a: "Mark Black", t: "rest" },
{ q: "Your calm mind is the ultimate weapon against your challenges. So relax.", a: "Bryant McGill", t: "rest" },
{ q: "Nature does not hurry, yet everything is accomplished.", a: "Lao Tzu", t: "rest" },
{ q: "The time to relax is when you don't have time for it.", a: "Sydney J. Harris", t: "rest" },
{ q: "Rest when you're weary. Refresh and renew yourself, your body, your mind, your spirit.", a: "Ralph Marston", t: "rest" },

/* ?? REFLECT ???????????????????????????????????????? 51–60 */
{ q: "How we spend our days is, of course, how we spend our lives.", a: "Annie Dillard", t: "reflect" },
{ q: "The unexamined life is not worth living.", a: "Socrates", t: "reflect" },
{ q: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", a: "Aristotle", t: "reflect" },
{ q: "Knowing yourself is the beginning of all wisdom.", a: "Aristotle", t: "reflect" },
{ q: "The only true wisdom is in knowing you know nothing.", a: "Socrates", t: "reflect" },
{ q: "Life can only be understood backwards; but it must be lived forwards.", a: "Søren Kierkegaard", t: "reflect" },
{ q: "The quieter you become, the more you are able to hear what is true.", a: "Anonymous", t: "reflect" },
{ q: "To see a World in a Grain of Sand, and a Heaven in a Wild Flower.", a: "William Blake", t: "reflect" },
{ q: "He who has a why to live can bear almost any how.", a: "Friedrich Nietzsche", t: "reflect" },
{ q: "Turn inward. Within is the fountain of good, always ready to bubble up, if you keep digging.", a: "Marcus Aurelius", t: "reflect" },

/* ?? COURAGE ???????????????????????????????????????? 61–70 */
{ q: "You gain strength, courage, and confidence by every experience in which you really stop to look fear in the face.", a: "Eleanor Roosevelt", t: "courage" },
{ q: "Courage is not the absence of fear, but the triumph over it.", a: "Nelson Mandela", t: "courage" },
{ q: "It takes courage to grow up and become who you really are.", a: "E.E. Cummings", t: "courage" },
{ q: "The cave you fear to enter holds the treasure you seek.", a: "Joseph Campbell", t: "courage" },
{ q: "You must do the things you think you cannot do.", a: "Eleanor Roosevelt", t: "courage" },
{ q: "Courage is resistance to fear, mastery of fear — not absence of fear.", a: "Mark Twain", t: "courage" },
{ q: "It is not the mountain we conquer, but ourselves.", a: "Edmund Hillary", t: "courage" },
{ q: "He who is not courageous enough to take risks will accomplish nothing in life.", a: "Muhammad Ali", t: "courage" },
{ q: "The wound is the place where the light enters you.", a: "Rumi", t: "courage" },
{ q: "Do the thing you fear most and the death of fear is certain.", a: "Mark Twain", t: "courage" },

/* ?? PATIENCE ??????????????????????????????????????? 71–80 */
{ q: "Patience is not the ability to wait, but the ability to keep a good attitude while waiting.", a: "Joyce Meyer", t: "patience" },
{ q: "Adopt the pace of nature: her secret is patience.", a: "Ralph Waldo Emerson", t: "patience" },
{ q: "Have patience with all things, but chiefly have patience with yourself.", a: "Francis de Sales", t: "patience" },
{ q: "The two hardest tests on the spiritual road are the patience to wait for the right moment and the courage not to be disappointed with what we encounter.", a: "Paulo Coelho", t: "patience" },
{ q: "Patience is bitter, but its fruit is sweet.", a: "Aristotle", t: "patience" },
{ q: "Trees that are slow to grow bear the best fruit.", a: "Molière", t: "patience" },
{ q: "A garden is a grand teacher. It teaches patience and careful watchfulness.", a: "Gertrude Jekyll", t: "patience" },
{ q: "Rivers know this: there is no hurry. We shall get there some day.", a: "A.A. Milne", t: "patience" },
{ q: "The strongest of all warriors are these two — Time and Patience.", a: "Leo Tolstoy", t: "patience" },
{ q: "He that can have patience can have what he will.", a: "Benjamin Franklin", t: "patience" },

/* ?? WONDER ????????????????????????????????????????? 81–90 */
{ q: "The world is full of magic things, patiently waiting for our senses to grow sharper.", a: "W.B. Yeats", t: "wonder" },
{ q: "He who can no longer pause to wonder and stand rapt in awe, is as good as dead.", a: "Albert Einstein", t: "wonder" },
{ q: "Look deep into nature, and then you will understand everything better.", a: "Albert Einstein", t: "wonder" },
{ q: "Wonder is the beginning of wisdom.", a: "Socrates", t: "wonder" },
{ q: "The clearest way into the Universe is through a forest wilderness.", a: "John Muir", t: "wonder" },
{ q: "In every walk with nature one receives far more than he seeks.", a: "John Muir", t: "wonder" },
{ q: "Those who dwell among the beauties and mysteries of the earth are never alone or weary of life.", a: "Rachel Carson", t: "wonder" },
{ q: "The universe is not required to be in perfect harmony with human ambition.", a: "Carl Sagan", t: "wonder" },
{ q: "Somewhere, something incredible is waiting to be known.", a: "Carl Sagan", t: "wonder" },
{ q: "To pay attention, this is our endless and proper work.", a: "Mary Oliver", t: "wonder" },

/* ?? PRESENCE ??????????????????????????????????????? 91–100 */
{ q: "The present moment is filled with joy and happiness. If you are attentive, you will see it.", a: "Thich Nhat Hanh", t: "presence" },
{ q: "Be where you are; otherwise you will miss your life.", a: "Buddha", t: "presence" },
{ q: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.", a: "Buddha", t: "presence" },
{ q: "The past is already gone, the future is not yet here. There's only one moment for you to live.", a: "Buddha", t: "presence" },
{ q: "Wherever you are, be there totally.", a: "Eckhart Tolle", t: "presence" },
{ q: "Realize deeply that the present moment is all you have.", a: "Eckhart Tolle", t: "presence" },
{ q: "Mindfulness isn't difficult. We just need to remember to do it.", a: "Sharon Salzberg", t: "presence" },
{ q: "The little things? The little moments? They aren't little.", a: "Jon Kabat-Zinn", t: "presence" },
{ q: "You are the sky. Everything else is just the weather.", a: "Pema Chödrön", t: "presence" },
{ q: "This moment is your life.", a: "Crocus", t: "presence" },
/* ?? FOCUS ????????????????????????????????????????? 101–110 */
{ q: "Until we can manage time, we can manage nothing else.", a: "Peter Drucker", t: "focus" },
{ q: "Ordinary people think merely of spending time. Great people think of using it.", a: "Arthur Schopenhauer", t: "focus" },
{ q: "Lack of direction, not lack of time, is the problem. We all have twenty-four hour days.", a: "Zig Ziglar", t: "focus" },
{ q: "The key is not to prioritize what's on your schedule, but to schedule your priorities.", a: "Stephen Covey", t: "focus" },
{ q: "You can do anything, but not everything.", a: "David Allen", t: "focus" },
{ q: "Your mind is for having ideas, not holding them.", a: "David Allen", t: "focus" },
{ q: "Simplicity is the ultimate sophistication.", a: "Leonardo da Vinci", t: "focus" },
{ q: "Perfection is achieved not when there is nothing more to add, but when there is nothing left to take away.", a: "Antoine de Saint-Exupéry", t: "focus" },
{ q: "Focus is a matter of deciding what things you're not going to do.", a: "John Carmack", t: "focus" },
{ q: "The art of being wise is the art of knowing what to overlook.", a: "William James", t: "focus" },

/* ?? CALM ?????????????????????????????????????????? 111–120 */
{ q: "You have power over your mind — not outside events. Realize this, and you will find strength.", a: "Marcus Aurelius", t: "calm" },
{ q: "He who is contented is rich.", a: "Lao Tzu", t: "calm" },
{ q: "When you realize nothing is lacking, the whole world belongs to you.", a: "Lao Tzu", t: "calm" },
{ q: "Muddy water is best cleared by leaving it alone.", a: "Alan Watts", t: "calm" },
{ q: "The only way to make sense out of change is to plunge into it, move with it, and join the dance.", a: "Alan Watts", t: "calm" },
{ q: "Waking up to who you are requires letting go of who you imagine yourself to be.", a: "Alan Watts", t: "calm" },
{ q: "Feelings come and go like clouds in a windy sky. Conscious breathing is my anchor.", a: "Thich Nhat Hanh", t: "calm" },
{ q: "Smile, breathe, and go slowly.", a: "Thich Nhat Hanh", t: "calm" },
{ q: "Peace comes from within. Do not seek it without.", a: "Buddha", t: "calm" },
{ q: "To understand everything is to forgive everything.", a: "Buddha", t: "calm" },

/* ?? BEGIN ????????????????????????????????????????? 121–130 */
{ q: "You are never too old to set another goal or to dream a new dream.", a: "C.S. Lewis", t: "begin" },
{ q: "The best time to plant a tree was twenty years ago. The second best time is now.", a: "Chinese Proverb", t: "begin" },
{ q: "Do what you can, with what you have, where you are.", a: "Theodore Roosevelt", t: "begin" },
{ q: "If you want to lift yourself up, lift up someone else.", a: "Booker T. Washington", t: "begin" },
{ q: "You don't have to see the whole staircase, just take the first step.", a: "Martin Luther King Jr.", t: "begin" },
{ q: "The beginning is the most important part of the work.", a: "Plato", t: "begin" },
{ q: "Every strike brings me closer to the next home run.", a: "Babe Ruth", t: "begin" },
{ q: "The only impossible journey is the one you never begin.", a: "Tony Robbins", t: "begin" },
{ q: "The first step toward success is taken when you refuse to be a captive of the environment.", a: "Mark Caine", t: "begin" },
{ q: "Something will grow from all you are going through. And it will be you.", a: "Anonymous", t: "begin" },

/* ?? PERSIST ???????????????????????????????????????? 131–140 */
{ q: "Continuous effort — not strength or intelligence — is the key to unlocking our potential.", a: "Winston Churchill", t: "persist" },
{ q: "Success is the sum of small efforts, repeated day in and day out.", a: "Robert Collier", t: "persist" },
{ q: "Energy and persistence conquer all things.", a: "Benjamin Franklin", t: "persist" },
{ q: "I have not failed. I've just found 10,000 ways that won't work.", a: "Thomas Edison", t: "persist" },
{ q: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.", a: "Thomas Edison", t: "persist" },
{ q: "The most difficult thing is the decision to act, the rest is merely tenacity.", a: "Amelia Earhart", t: "persist" },
{ q: "Perseverance is failing nineteen times and succeeding the twentieth.", a: "Julie Andrews", t: "persist" },
{ q: "Through perseverance many people win success out of what seemed destined to be certain failure.", a: "Benjamin Disraeli", t: "persist" },
{ q: "The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack of will.", a: "Vince Lombardi", t: "persist" },
{ q: "It always seems impossible until it's done.", a: "Nelson Mandela", t: "persist" },

/* ?? REST ??????????????????????????????????????????? 141–150 */
{ q: "Sometimes we have to let go of the picture of what we thought it would be like and learn to find joy in the story we are actually living.", a: "Rachel Marie Martin", t: "rest" },
{ q: "Self-care is how you take your power back.", a: "Lalah Delia", t: "rest" },
{ q: "Almost everything comes from nothing.", a: "Henry Fielding", t: "rest" },
{ q: "There is more to life than increasing its speed.", a: "Mahatma Gandhi", t: "rest" },
{ q: "Slow down and everything you are chasing will come around and catch you.", a: "John De Paola", t: "rest" },
{ q: "The best cure for a tired mind is a walk in the woods.", a: "Anonymous", t: "rest" },
{ q: "Take a break, don't quit.", a: "Anonymous", t: "rest" },
{ q: "Doing nothing is sometimes the hardest thing to do.", a: "Anonymous", t: "rest" },
{ q: "Rest and self-care are so important. When you take time to replenish your spirit, you become a better version of yourself.", a: "Eleanor Brownn", t: "rest" },
{ q: "Sleep is the golden chain that ties health and our bodies together.", a: "Thomas Dekker", t: "rest" },

/* ?? REFLECT ???????????????????????????????????????? 151–160 */
{ q: "We do not learn from experience. We learn from reflecting on experience.", a: "John Dewey", t: "reflect" },
{ q: "Follow effective action with quiet reflection. From the quiet reflection will come even more effective action.", a: "Peter Drucker", t: "reflect" },
{ q: "The real question is not whether life exists after death. The real question is whether you are alive before death.", a: "Osho", t: "reflect" },
{ q: "Whatever the present moment contains, accept it as if you had chosen it.", a: "Eckhart Tolle", t: "reflect" },
{ q: "Life isn't about finding yourself. Life is about creating yourself.", a: "George Bernard Shaw", t: "reflect" },
{ q: "The only journey is the one within.", a: "Rainer Maria Rilke", t: "reflect" },
{ q: "Be patient toward all that is unsolved in your heart and try to love the questions themselves.", a: "Rainer Maria Rilke", t: "reflect" },
{ q: "Let everything happen to you: beauty and terror. Just keep going. No feeling is final.", a: "Rainer Maria Rilke", t: "reflect" },
{ q: "The unexamined life is not worth living, but the examined life is often painful. Do it anyway.", a: "Anonymous", t: "reflect" },
{ q: "You are not a drop in the ocean. You are the entire ocean in a drop.", a: "Rumi", t: "reflect" },

/* ?? COURAGE ???????????????????????????????????????? 161–170 */
{ q: "Life shrinks or expands in proportion to one's courage.", a: "Anaïs Nin", t: "courage" },
{ q: "Courage is the most important of all the virtues because without courage, you can't practice any other virtue consistently.", a: "Maya Angelou", t: "courage" },
{ q: "You may not control all the events that happen to you, but you can decide not to be reduced by them.", a: "Maya Angelou", t: "courage" },
{ q: "I can be changed by what happens to me. But I refuse to be reduced by it.", a: "Maya Angelou", t: "courage" },
{ q: "Do not go where the path may lead, go instead where there is no path and leave a trail.", a: "Ralph Waldo Emerson", t: "courage" },
{ q: "Whatever you do, you need courage.", a: "Ralph Waldo Emerson", t: "courage" },
{ q: "He who has overcome his fears will truly be free.", a: "Aristotle", t: "courage" },
{ q: "The greatest glory in living lies not in never falling, but in rising every time we fall.", a: "Nelson Mandela", t: "courage" },
{ q: "It takes courage to say yes to rest and play in a culture where exhaustion is seen as a status symbol.", a: "Brené Brown", t: "courage" },
{ q: "Vulnerability is not winning or losing; it's having the courage to show up when you can't control the outcome.", a: "Brené Brown", t: "courage" },

/* ?? PATIENCE ??????????????????????????????????????? 171–180 */
{ q: "Nature does not hurry, yet everything is accomplished.", a: "Anonymous", t: "patience" },
{ q: "The greatest prayer is patience.", a: "Buddha", t: "patience" },
{ q: "With time and patience, the mulberry leaf becomes satin.", a: "Chinese Proverb", t: "patience" },
{ q: "A moment of patience in a moment of anger saves a thousand moments of regret.", a: "Ali ibn Abi Talib", t: "patience" },
{ q: "Patience is the companion of wisdom.", a: "Saint Augustine", t: "patience" },
{ q: "The key to everything is patience. You get the chicken by hatching the egg, not by smashing it.", a: "Arnold H. Glasow", t: "patience" },
{ q: "Patience is power. Patience is not an absence of action; rather it is timing.", a: "Fulton J. Sheen", t: "patience" },
{ q: "Even a stopped clock is right twice a day.", a: "Anonymous", t: "patience" },
{ q: "Good things come to those who wait, but only the things left by those who hustle.", a: "Abraham Lincoln", t: "patience" },
{ q: "Patience attracts happiness; it brings near that which is far.", a: "Anonymous", t: "patience" },

/* ?? WONDER ????????????????????????????????????????? 181–190 */
{ q: "The sun, the moon, the stars, the seas, the hills and the plains — are not these, O Soul, the Vision of Him who reigns?", a: "William Wordsworth", t: "wonder" },
{ q: "I would rather have a mind opened by wonder than one closed by belief.", a: "Gerry Spence", t: "wonder" },
{ q: "Wonder is the feeling of a philosopher, and philosophy begins in wonder.", a: "Plato", t: "wonder" },
{ q: "The fairest thing we can experience is the mysterious. It is the fundamental emotion that stands at the cradle of true art and true science.", a: "Albert Einstein", t: "wonder" },
{ q: "Look up at the stars and not down at your feet.", a: "Stephen Hawking", t: "wonder" },
{ q: "Remember to look up at the stars and not down at your feet. Try to make sense of what you see.", a: "Stephen Hawking", t: "wonder" },
{ q: "In all things of nature there is something of the marvelous.", a: "Aristotle", t: "wonder" },
{ q: "The earth laughs in flowers.", a: "Ralph Waldo Emerson", t: "wonder" },
{ q: "There is a crack in everything. That's how the light gets in.", a: "Leonard Cohen", t: "wonder" },
{ q: "The world is a book, and those who do not travel read only one page.", a: "Saint Augustine", t: "wonder" },

/* ?? PRESENCE ??????????????????????????????????????? 191–200 */
{ q: "The best way to capture moments is to pay attention. This is how we cultivate mindfulness.", a: "Jon Kabat-Zinn", t: "presence" },
{ q: "Mindfulness is awareness that arises through paying attention, on purpose, in the present moment, non-judgementally.", a: "Jon Kabat-Zinn", t: "presence" },
{ q: "You can't stop the waves, but you can learn to surf.", a: "Jon Kabat-Zinn", t: "presence" },
{ q: "The only moment we ever really have is this one.", a: "Anonymous", t: "presence" },
{ q: "In the beginner's mind there are many possibilities, but in the expert's there are few.", a: "Shunryu Suzuki", t: "presence" },
{ q: "When you do something, you should burn yourself completely, like a good bonfire, leaving no trace of yourself.", a: "Shunryu Suzuki", t: "presence" },
{ q: "Do not try to become anything. Do not make yourself into anything. Be a human being who is aware.", a: "Anonymous", t: "presence" },
{ q: "Attention is the beginning of devotion.", a: "Mary Oliver", t: "presence" },
{ q: "Instructions for living a life: Pay attention. Be astonished. Tell about it.", a: "Mary Oliver", t: "presence" },
{ q: "This moment is your life. And it is enough.", a: "Crocus", t: "presence" },
/* ?? FOCUS ????????????????????????????????????????? 201–210 */
{ q: "The sun's rays do not burn until brought to a focus.", a: "Alexander Graham Bell", t: "focus" },
{ q: "If you chase two rabbits, you will not catch either one.", a: "Russian Proverb", t: "focus" },
{ q: "You will never reach your destination if you stop and throw stones at every dog that barks.", a: "Anonymous", t: "focus" },
{ q: "It is the mark of an educated mind to be able to entertain a thought without accepting it.", a: "Aristotle", t: "focus" },
{ q: "Nothing is less productive than to make more efficient what should not be done at all.", a: "Peter Drucker", t: "focus" },
{ q: "There is nothing so useless as doing efficiently that which should not be done at all.", a: "Peter Drucker", t: "focus" },
{ q: "The best way to predict your future is to create it.", a: "Peter Drucker", t: "focus" },
{ q: "Amateurs sit and wait for inspiration. The rest of us just get up and go to work.", a: "Stephen King", t: "focus" },
{ q: "Talent is cheaper than table salt. What separates the talented individual from the successful one is a lot of hard work.", a: "Stephen King", t: "focus" },
{ q: "The scariest moment is always just before you start.", a: "Stephen King", t: "focus" },

/* ?? CALM ?????????????????????????????????????????? 211–220 */
{ q: "Nothing is so much to be shunned as the noise of an unquiet mind.", a: "Seneca", t: "calm" },
{ q: "We suffer more often in imagination than in reality.", a: "Seneca", t: "calm" },
{ q: "If a man knows not to which port he sails, no wind is favorable.", a: "Seneca", t: "calm" },
{ q: "He who is brave is free.", a: "Seneca", t: "calm" },
{ q: "It is not that we have a short time to live, but that we waste a lot of it.", a: "Seneca", t: "calm" },
{ q: "Luck is what happens when preparation meets opportunity.", a: "Seneca", t: "calm" },
{ q: "Begin at once to live, and count each separate day as a separate life.", a: "Seneca", t: "calm" },
{ q: "Associate with people who are likely to improve you.", a: "Seneca", t: "calm" },
{ q: "Difficulties strengthen the mind, as labor does the body.", a: "Seneca", t: "calm" },
{ q: "While we wait for life, life passes.", a: "Seneca", t: "calm" },

/* ?? BEGIN ????????????????????????????????????????? 221–230 */
{ q: "Do not wait; the time will never be 'just right.'", a: "Napoleon Hill", t: "begin" },
{ q: "You cannot escape the responsibility of tomorrow by evading it today.", a: "Abraham Lincoln", t: "begin" },
{ q: "The secret of change is to focus all your energy not on fighting the old, but on building the new.", a: "Socrates", t: "begin" },
{ q: "Everything you've ever wanted is on the other side of fear.", a: "George Addair", t: "begin" },
{ q: "Life is 10% what happens to us and 90% how we react to it.", a: "Charles R. Swindoll", t: "begin" },
{ q: "The only way to do great work is to love what you do.", a: "Steve Jobs", t: "begin" },
{ q: "Your time is limited, don't waste it living someone else's life.", a: "Steve Jobs", t: "begin" },
{ q: "Innovation distinguishes between a leader and a follower.", a: "Steve Jobs", t: "begin" },
{ q: "Have the courage to follow your heart and intuition.", a: "Steve Jobs", t: "begin" },
{ q: "Start where you are. Use what you have. Do what you can. The rest will follow.", a: "Crocus", t: "begin" },

/* ?? PERSIST ???????????????????????????????????????? 231–240 */
{ q: "Failure is the condiment that gives success its flavor.", a: "Truman Capote", t: "persist" },
{ q: "Success consists of going from failure to failure without loss of enthusiasm.", a: "Winston Churchill", t: "persist" },
{ q: "Success is not final, failure is not fatal: it is the courage to continue that counts.", a: "Winston Churchill", t: "persist" },
{ q: "Never, never, never give up.", a: "Winston Churchill", t: "persist" },
{ q: "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.", a: "Winston Churchill", t: "persist" },
{ q: "Courage is what it takes to stand up and speak; courage is also what it takes to sit down and listen.", a: "Winston Churchill", t: "persist" },
{ q: "To improve is to change; to be perfect is to change often.", a: "Winston Churchill", t: "persist" },
{ q: "If you're going through hell, keep going.", a: "Winston Churchill", t: "persist" },
{ q: "You have enemies? Good. That means you've stood up for something, sometime in your life.", a: "Winston Churchill", t: "persist" },
{ q: "The habit of persistence is the habit of victory.", a: "Herbert Kaufman", t: "persist" },

/* ?? REST ??????????????????????????????????????????? 241–250 */
{ q: "Rest is the sweet sauce of labor.", a: "Plutarch", t: "rest" },
{ q: "There is no music in a rest, but there is the making of music in it.", a: "John Ruskin", t: "rest" },
{ q: "Every now and then go away, have a little relaxation, for when you come back to your work your judgment will be surer.", a: "Leonardo da Vinci", t: "rest" },
{ q: "Take time to deliberate; but when the time for action arrives, stop thinking and go in.", a: "Andrew Jackson", t: "rest" },
{ q: "The time to relax is when you don't have time for it.", a: "Jim Goodwin", t: "rest" },
{ q: "Silence is also conversation.", a: "Ramana Maharshi", t: "rest" },
{ q: "Be still, and the world will come to you.", a: "Anonymous", t: "rest" },
{ q: "Slow is smooth, smooth is fast.", a: "Navy SEAL Adage", t: "rest" },
{ q: "Let the dust settle. Clarity will come.", a: "Crocus", t: "rest" },
{ q: "Rest is a form of repair.", a: "Anonymous", t: "rest" },

/* ?? REFLECT ???????????????????????????????????????? 251–260 */
{ q: "The soul becomes dyed with the color of its thoughts.", a: "Marcus Aurelius", t: "reflect" },
{ q: "Very little is needed to make a happy life; it is all within yourself, in your way of thinking.", a: "Marcus Aurelius", t: "reflect" },
{ q: "You have power over your mind — not outside events.", a: "Marcus Aurelius", t: "reflect" },
{ q: "Confine yourself to the present.", a: "Marcus Aurelius", t: "reflect" },
{ q: "Waste no more time arguing about what a good man should be. Be one.", a: "Marcus Aurelius", t: "reflect" },
{ q: "When you arise in the morning, think of what a precious privilege it is to be alive — to breathe, to think, to enjoy, to love.", a: "Marcus Aurelius", t: "reflect" },
{ q: "If it is not right, do not do it; if it is not true, do not say it.", a: "Marcus Aurelius", t: "reflect" },
{ q: "The happiness of your life depends upon the quality of your thoughts.", a: "Marcus Aurelius", t: "reflect" },
{ q: "The best revenge is to be unlike him who performed the injury.", a: "Marcus Aurelius", t: "reflect" },
{ q: "Accept the things to which fate binds you, and love the people with whom fate brings you together.", a: "Marcus Aurelius", t: "reflect" },

/* ?? COURAGE ???????????????????????????????????????? 261–270 */
{ q: "It is not death that a man should fear, but he should fear never beginning to live.", a: "Marcus Aurelius", t: "courage" },
{ q: "The first rule is to keep an untroubled spirit. The second is to look things in the face and know them for what they are.", a: "Marcus Aurelius", t: "courage" },
{ q: "Never let the future disturb you. You will meet it with the same weapons of reason which today arm you against the present.", a: "Marcus Aurelius", t: "courage" },
{ q: "How much more grievous are the consequences of anger than the causes of it.", a: "Marcus Aurelius", t: "courage" },
{ q: "The impediment to action advances action. What stands in the way becomes the way.", a: "Marcus Aurelius", t: "courage" },
{ q: "Nothing happens to any man that he is not formed by nature to bear.", a: "Marcus Aurelius", t: "courage" },
{ q: "Do not act as if you were going to live ten thousand years. Death hangs over you. While you live, while it is in your power, be good.", a: "Marcus Aurelius", t: "courage" },
{ q: "Look well into thyself; there is a source of strength which will always spring up if thou wilt always look.", a: "Marcus Aurelius", t: "courage" },
{ q: "The art of living is more like wrestling than dancing.", a: "Marcus Aurelius", t: "courage" },
{ q: "Courage is not the absence of despair; it is, rather, the capacity to move ahead in spite of despair.", a: "Rollo May", t: "courage" },

/* ?? PATIENCE ??????????????????????????????????????? 271–280 */
{ q: "Patience and perseverance have a magical effect before which difficulties disappear and obstacles vanish.", a: "John Quincy Adams", t: "patience" },
{ q: "Patience is the best remedy for every trouble.", a: "Plautus", t: "patience" },
{ q: "For the moment, what we attend to is reality.", a: "William James", t: "patience" },
{ q: "A tree is known by its fruit; a man by his deeds.", a: "Saint Basil", t: "patience" },
{ q: "All things come round to him who will but wait.", a: "Henry Wadsworth Longfellow", t: "patience" },
{ q: "The two most powerful warriors are patience and time.", a: "Leo Tolstoy", t: "patience" },
{ q: "Patience is not passive; on the contrary, it is active; it is concentrated strength.", a: "Edward G. Bulwer-Lytton", t: "patience" },
{ q: "Little by little, a little becomes a lot.", a: "Tanzanian Proverb", t: "patience" },
{ q: "Water cuts through rock not by force, but by persistence.", a: "Anonymous", t: "patience" },
{ q: "The river knows no hurry, yet it reaches the sea.", a: "Crocus", t: "patience" },

/* ?? WONDER ????????????????????????????????????????? 281–290 */
{ q: "The wilderness holds answers to more questions than we have yet learned to ask.", a: "Nancy Wynne Newhall", t: "wonder" },
{ q: "To sit in the shade on a fine day and look upon verdure is the most perfect refreshment.", a: "Jane Austen", t: "wonder" },
{ q: "Nature always wears the colors of the spirit.", a: "Ralph Waldo Emerson", t: "wonder" },
{ q: "And into the forest I go, to lose my mind and find my soul.", a: "John Muir", t: "wonder" },
{ q: "The mountains are calling and I must go.", a: "John Muir", t: "wonder" },
{ q: "Keep close to Nature's heart. Break clear away, once in a while, and climb a mountain or spend a week in the woods.", a: "John Muir", t: "wonder" },
{ q: "Everybody needs beauty as well as bread, places to play in and pray in.", a: "John Muir", t: "wonder" },
{ q: "Nature's peace will flow into you as sunshine flows into trees.", a: "John Muir", t: "wonder" },
{ q: "The power of imagination makes us infinite.", a: "John Muir", t: "wonder" },
{ q: "Between every two pines is a doorway to a new world.", a: "John Muir", t: "wonder" },

/* ?? PRESENCE ??????????????????????????????????????? 291–300 */
{ q: "Do not spoil what you have by desiring what you have not.", a: "Epicurus", t: "presence" },
{ q: "He who is not satisfied with a little, is satisfied with nothing.", a: "Epicurus", t: "presence" },
{ q: "Not what we have but what we enjoy constitutes our abundance.", a: "Epicurus", t: "presence" },
{ q: "The greater the difficulty, the more glory in surmounting it.", a: "Epicurus", t: "presence" },
{ q: "We are always getting ready to live but never living.", a: "Ralph Waldo Emerson", t: "presence" },
{ q: "Write it on your heart that every day is the best day in the year.", a: "Ralph Waldo Emerson", t: "presence" },
{ q: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", a: "Ralph Waldo Emerson", t: "presence" },
{ q: "Once you make a decision, the universe conspires to make it happen.", a: "Ralph Waldo Emerson", t: "presence" },
{ q: "The only person you are destined to become is the person you decide to be.", a: "Ralph Waldo Emerson", t: "presence" },
{ q: "Breathe. You are here. That is enough.", a: "Crocus", t: "presence" },
/* ============================================================
 *  BATCH 4 — quotes 301–400
 * ============================================================ */

/* ?? FOCUS ????????????????????????????????????????? 301–310 */
{ q: "Do first things first, and second things not at all.", a: "Peter Drucker", t: "focus" },
{ q: "Efficiency is doing things right; effectiveness is doing the right things.", a: "Peter Drucker", t: "focus" },
{ q: "The best way to get things done is to do one thing at a time.", a: "Anonymous", t: "focus" },
{ q: "The main thing is to keep the main thing the main thing.", a: "Zig Ziglar", t: "focus" },
{ q: "You can't depend on your eyes when your imagination is out of focus.", a: "Mark Twain", t: "focus" },
{ q: "Whenever you want to achieve something, keep your eyes open, concentrate and make sure you know exactly what it is you want.", a: "Paulo Coelho", t: "focus" },
{ q: "When you want something, all the universe conspires in helping you to achieve it.", a: "Paulo Coelho", t: "focus" },
{ q: "There is only one corner of the universe you can be certain of improving, and that's your own self.", a: "Aldous Huxley", t: "focus" },
{ q: "The world is full of magical things patiently waiting for our wits to grow sharper.", a: "Bertrand Russell", t: "focus" },
{ q: "Concentrate your energies, your thoughts and your capital.", a: "Andrew Carnegie", t: "focus" },

/* ?? CALM ?????????????????????????????????????????? 311–320 */
{ q: "The first principle is that you must not fool yourself — and you are the easiest person to fool.", a: "Richard Feynman", t: "calm" },
{ q: "You are not a drop in the ocean. You are the entire ocean in a drop.", a: "Anonymous", t: "calm" },
{ q: "Stillness is where clarity lives.", a: "Crocus", t: "calm" },
{ q: "Let go of the need to be right, and the mind becomes quiet.", a: "Anonymous", t: "calm" },
{ q: "Softness overcomes hardness. Quiet overcomes noise.", a: "Crocus", t: "calm" },
{ q: "If you are depressed you are living in the past. If you are anxious you are living in the future. If you are at peace, you are living in the present.", a: "Lao Tzu", t: "calm" },
{ q: "When I let go of what I am, I become what I might be.", a: "Lao Tzu", t: "calm" },
{ q: "To the mind that is still, the whole universe surrenders.", a: "Lao Tzu", t: "calm" },
{ q: "Care about what other people think and you will always be their prisoner.", a: "Lao Tzu", t: "calm" },
{ q: "Knowing others is intelligence; knowing yourself is true wisdom.", a: "Lao Tzu", t: "calm" },

/* ?? BEGIN ????????????????????????????????????????? 321–330 */
{ q: "Everything is hard before it is easy.", a: "Johann Wolfgang von Goethe", t: "begin" },
{ q: "Whatever you do, or dream you can, begin it. Boldness has genius and power and magic in it.", a: "Johann Wolfgang von Goethe", t: "begin" },
{ q: "Knowing is not enough; we must apply. Willing is not enough; we must do.", a: "Johann Wolfgang von Goethe", t: "begin" },
{ q: "The way to get started is to quit talking and begin doing.", a: "Walt Disney", t: "begin" },
{ q: "All our dreams can come true, if we have the courage to pursue them.", a: "Walt Disney", t: "begin" },
{ q: "It's kind of fun to do the impossible.", a: "Walt Disney", t: "begin" },
{ q: "The best way to begin is to begin.", a: "Anonymous", t: "begin" },
{ q: "Action is the foundational key to all success.", a: "Pablo Picasso", t: "begin" },
{ q: "Inspiration exists, but it has to find you working.", a: "Pablo Picasso", t: "begin" },
{ q: "Every child is an artist. The problem is how to remain an artist once we grow up.", a: "Pablo Picasso", t: "begin" },

/* ?? PERSIST ???????????????????????????????????????? 331–340 */
{ q: "Patience and perseverance have a magical effect before which difficulties disappear.", a: "John Quincy Adams", t: "persist" },
{ q: "Fall seven times, stand up eight. This is the whole secret.", a: "Japanese Proverb", t: "persist" },
{ q: "The world breaks everyone, and afterward, some are strong at the broken places.", a: "Ernest Hemingway", t: "persist" },
{ q: "Courage is grace under pressure.", a: "Ernest Hemingway", t: "persist" },
{ q: "Never confuse a single defeat with a final defeat.", a: "F. Scott Fitzgerald", t: "persist" },
{ q: "Vitality shows in not only the ability to persist but the ability to start over.", a: "F. Scott Fitzgerald", t: "persist" },
{ q: "The best way out is always through.", a: "Robert Frost", t: "persist" },
{ q: "In three words I can sum up everything I've learned about life: it goes on.", a: "Robert Frost", t: "persist" },
{ q: "Freedom lies in being bold.", a: "Robert Frost", t: "persist" },
{ q: "Two roads diverged in a wood, and I — I took the one less traveled by, and that has made all the difference.", a: "Robert Frost", t: "persist" },

/* ?? REST ??????????????????????????????????????????? 341–350 */
{ q: "You are allowed to be both a masterpiece and a work in progress simultaneously.", a: "Sophia Bush", t: "rest" },
{ q: "Almost everything will work again if you unplug it for a few minutes.", a: "Anne Lamott", t: "rest" },
{ q: "Perfectionism is the voice of the oppressor, the enemy of the people.", a: "Anne Lamott", t: "rest" },
{ q: "Take a deep breath. It's just a bad day, not a bad life.", a: "Anonymous", t: "rest" },
{ q: "You don't have to attend every argument you're invited to.", a: "Anonymous", t: "rest" },
{ q: "Sometimes the bravest thing you can do is rest.", a: "Crocus", t: "rest" },
{ q: "Naps are nature's way of reminding you that life is nice.", a: "Anonymous", t: "rest" },
{ q: "Do less. Breathe more.", a: "Crocus", t: "rest" },
{ q: "Not every day has to be productive. Some days just need to be lived.", a: "Anonymous", t: "rest" },
{ q: "The quiet life is the fullest life.", a: "Crocus", t: "rest" },

/* ?? REFLECT ???????????????????????????????????????? 351–360 */
{ q: "The greatest discovery of my generation is that a human being can alter his life by altering his attitudes.", a: "William James", t: "reflect" },
{ q: "Act as if what you do makes a difference. It does.", a: "William James", t: "reflect" },
{ q: "The art of being wise is the art of knowing what to overlook.", a: "William James", t: "reflect" },
{ q: "Acceptance of what has happened is the first step to overcoming the consequences of any misfortune.", a: "William James", t: "reflect" },
{ q: "Believe that life is worth living and your belief will help create the fact.", a: "William James", t: "reflect" },
{ q: "The self is not something ready-made, but something in continuous formation through choice of action.", a: "John Dewey", t: "reflect" },
{ q: "Education is not preparation for life; education is life itself.", a: "John Dewey", t: "reflect" },
{ q: "Arriving at one goal is the starting point to another.", a: "John Dewey", t: "reflect" },
{ q: "Failure is instructive. The person who really thinks learns quite as much from his failures as from his successes.", a: "John Dewey", t: "reflect" },
{ q: "We only think when confronted with a problem.", a: "John Dewey", t: "reflect" },

/* ?? COURAGE ???????????????????????????????????????? 361–370 */
{ q: "The wound is the place where the light enters you. Do not hide it.", a: "Rumi", t: "courage" },
{ q: "Set your life on fire. Seek those who fan your flames.", a: "Rumi", t: "courage" },
{ q: "Yesterday I was clever, so I wanted to change the world. Today I am wise, so I am changing myself.", a: "Rumi", t: "courage" },
{ q: "As you start to walk on the way, the way appears.", a: "Rumi", t: "courage" },
{ q: "You were born with wings, why prefer to crawl through life?", a: "Rumi", t: "courage" },
{ q: "Do not feel lonely, the entire universe is inside you.", a: "Rumi", t: "courage" },
{ q: "Raise your words, not voice. It is rain that grows flowers, not thunder.", a: "Rumi", t: "courage" },
{ q: "Let yourself be silently drawn by the strange pull of what you really love.", a: "Rumi", t: "courage" },
{ q: "The art of knowing is knowing what to ignore.", a: "Rumi", t: "courage" },
{ q: "What you seek is seeking you.", a: "Rumi", t: "courage" },

/* ?? PATIENCE ??????????????????????????????????????? 371–380 */
{ q: "The strongest oak of the forest is not the one that is protected from the storm and hidden from the sun.", a: "Napoleon Hill", t: "patience" },
{ q: "Strength and growth come only through continuous effort and struggle.", a: "Napoleon Hill", t: "patience" },
{ q: "Patience, persistence and perspiration make an unbeatable combination for success.", a: "Napoleon Hill", t: "patience" },
{ q: "Every adversity, every failure, every heartache carries with it the seed of an equal or greater benefit.", a: "Napoleon Hill", t: "patience" },
{ q: "If you cannot do great things, do small things in a great way.", a: "Napoleon Hill", t: "patience" },
{ q: "Do not wait for leaders; do it alone, person to person.", a: "Mother Teresa", t: "patience" },
{ q: "Not all of us can do great things. But we can do small things with great love.", a: "Mother Teresa", t: "patience" },
{ q: "Spread love everywhere you go. Let no one ever come to you without leaving happier.", a: "Mother Teresa", t: "patience" },
{ q: "The good you do today will be forgotten tomorrow. Do good anyway.", a: "Mother Teresa", t: "patience" },
{ q: "We ourselves feel that what we are doing is just a drop in the ocean. But the ocean would be less because of that missing drop.", a: "Mother Teresa", t: "patience" },

/* ?? WONDER ????????????????????????????????????????? 381–390 */
{ q: "The universe is under no obligation to make sense to you.", a: "Neil deGrasse Tyson", t: "wonder" },
{ q: "We are a way for the cosmos to know itself.", a: "Carl Sagan", t: "wonder" },
{ q: "If you wish to make an apple pie from scratch, you must first invent the universe.", a: "Carl Sagan", t: "wonder" },
{ q: "Extinction is the rule. Survival is the exception.", a: "Carl Sagan", t: "wonder" },
{ q: "The cosmos is within us. We are made of star-stuff.", a: "Carl Sagan", t: "wonder" },
{ q: "Imagination will often carry us to worlds that never were. But without it we go nowhere.", a: "Carl Sagan", t: "wonder" },
{ q: "For small creatures such as we the vastness is bearable only through love.", a: "Carl Sagan", t: "wonder" },
{ q: "Somewhere, something incredible is waiting to be known.", a: "Sharon Begley", t: "wonder" },
{ q: "What we know is a drop, what we don't know is an ocean.", a: "Isaac Newton", t: "wonder" },
{ q: "I do not know what I may appear to the world, but to myself I seem to have been only like a boy playing on the seashore.", a: "Isaac Newton", t: "wonder" },

/* ?? PRESENCE ??????????????????????????????????????? 391–400 */
{ q: "Walk as if you are kissing the earth with your feet.", a: "Thich Nhat Hanh", t: "presence" },
{ q: "Feelings come and go like clouds in a windy sky. Conscious breathing is my anchor.", a: "Thich Nhat Hanh", t: "presence" },
{ q: "The present moment is the only moment available to us, and it is the door to all moments.", a: "Thich Nhat Hanh", t: "presence" },
{ q: "When you love someone, the best thing you can offer is your presence.", a: "Thich Nhat Hanh", t: "presence" },
{ q: "Drink your tea slowly and reverently, as if it is the axis on which the world earth revolves.", a: "Thich Nhat Hanh", t: "presence" },
{ q: "Sometimes your joy is the source of your smile, but sometimes your smile can be the source of your joy.", a: "Thich Nhat Hanh", t: "presence" },
{ q: "To be beautiful means to be yourself. You don't need to be accepted by others.", a: "Thich Nhat Hanh", t: "presence" },
{ q: "Because of your smile, you make life more beautiful.", a: "Thich Nhat Hanh", t: "presence" },
{ q: "Letting go gives us freedom, and freedom is the only condition for happiness.", a: "Thich Nhat Hanh", t: "presence" },
{ q: "Breathing in, I calm body and mind. Breathing out, I smile.", a: "Thich Nhat Hanh", t: "presence" },


/* ============================================================
 *  BATCH 5 — quotes 401–500
 * ============================================================ */

/* ?? FOCUS ????????????????????????????????????????? 401–410 */
{ q: "Until we can manage time, we can manage nothing else.", a: "Peter Drucker", t: "focus" },
{ q: "There is no virtue in doing more than you can sustain.", a: "Anonymous", t: "focus" },
{ q: "Every hour you spend planning saves three in execution.", a: "Anonymous", t: "focus" },
{ q: "If you want to go fast, go alone. If you want to go far, go together.", a: "African Proverb", t: "focus" },
{ q: "A river cuts through rock not because of its power but its persistence.", a: "James N. Watkins", t: "focus" },
{ q: "Well begun is half done.", a: "Aristotle", t: "focus" },
{ q: "Purity of heart is to will one thing.", a: "Søren Kierkegaard", t: "focus" },
{ q: "The function of prayer is not to influence God, but rather to change the nature of the one who prays.", a: "Søren Kierkegaard", t: "focus" },
{ q: "Life is not a problem to be solved, but a reality to be experienced.", a: "Søren Kierkegaard", t: "focus" },
{ q: "The highest and most beautiful things in the world cannot be seen, heard, or touched, but are felt in the heart.", a: "Helen Keller", t: "focus" },

/* ?? CALM ?????????????????????????????????????????? 411–420 */
{ q: "Silence is not an absence but a presence.", a: "Anne D. LeClaire", t: "calm" },
{ q: "In the midst of movement and chaos, keep stillness inside of you.", a: "Deepak Chopra", t: "calm" },
{ q: "The quieter you become, the more you can hear.", a: "Baba Ram Dass", t: "calm" },
{ q: "Peace begins with a smile.", a: "Mother Teresa", t: "calm" },
{ q: "Nothing is worth more than this day.", a: "Johann Wolfgang von Goethe", t: "calm" },
{ q: "A quiet mind is able to hear intuition over fear.", a: "Anonymous", t: "calm" },
{ q: "Calm is a superpower.", a: "Anonymous", t: "calm" },
{ q: "The storm is not the whole sky.", a: "Crocus", t: "calm" },
{ q: "Let it be. Let it go. Let it flow.", a: "Anonymous", t: "calm" },
{ q: "Breathe out the noise. Breathe in the quiet.", a: "Crocus", t: "calm" },

/* ?? BEGIN ????????????????????????????????????????? 421–430 */
{ q: "You are one decision away from a completely different life.", a: "Anonymous", t: "begin" },
{ q: "The best project you'll ever work on is you.", a: "Anonymous", t: "begin" },
{ q: "If opportunity doesn't knock, build a door.", a: "Milton Berle", t: "begin" },
{ q: "Everyone has inside them a piece of good news. The good news is that you don't know how great you can be.", a: "Anne Frank", t: "begin" },
{ q: "Think of all the beauty still left around you and be happy.", a: "Anne Frank", t: "begin" },
{ q: "How wonderful it is that nobody need wait a single moment before starting to improve the world.", a: "Anne Frank", t: "begin" },
{ q: "The best remedy for those who are afraid, lonely or unhappy is to go outside.", a: "Anne Frank", t: "begin" },
{ q: "Laziness may appear attractive, but work gives satisfaction.", a: "Anne Frank", t: "begin" },
{ q: "Whoever is happy will make others happy too.", a: "Anne Frank", t: "begin" },
{ q: "I don't think of all the misery, but of the beauty that still remains.", a: "Anne Frank", t: "begin" },

/* ?? PERSIST ???????????????????????????????????????? 431–440 */
{ q: "The only way to do great work is to love what you do.", a: "Anonymous", t: "persist" },
{ q: "Keep going. Everything you need will come to you at the perfect time.", a: "Anonymous", t: "persist" },
{ q: "Storms make trees take deeper roots.", a: "Dolly Parton", t: "persist" },
{ q: "The sun himself is weak when he first rises, and gathers strength and courage as the day gets on.", a: "Charles Dickens", t: "persist" },
{ q: "I have been bent and broken, but — I hope — into a better shape.", a: "Charles Dickens", t: "persist" },
{ q: "No one is useless in this world who lightens the burdens of another.", a: "Charles Dickens", t: "persist" },
{ q: "Procrastination is the thief of time.", a: "Charles Dickens", t: "persist" },
{ q: "Suffering has been stronger than all other teaching, and has taught me to understand what your heart used to be.", a: "Charles Dickens", t: "persist" },
{ q: "The pain of parting is nothing to the joy of meeting again.", a: "Charles Dickens", t: "persist" },
{ q: "Have a heart that never hardens, and a temper that never tires, and a touch that never hurts.", a: "Charles Dickens", t: "persist" },

/* ?? REST ??????????????????????????????????????????? 441–450 */
{ q: "Almost anything will work again if you unplug it for a few minutes — including you.", a: "Anne Lamott", t: "rest" },
{ q: "Rest is not a reward for working. It is a right.", a: "Anonymous", t: "rest" },
{ q: "Take time to do nothing. It is not wasting time; it is restoring it.", a: "Crocus", t: "rest" },
{ q: "Sleep is the best meditation.", a: "Anonymous", t: "rest" },
{ q: "Your body hears everything your mind says. Rest well.", a: "Naomi Judd", t: "rest" },
{ q: "The best bridge between despair and hope is a good night's sleep.", a: "E. Joseph Cossman", t: "rest" },
{ q: "You cannot pour from an empty cup.", a: "Anonymous", t: "rest" },
{ q: "Do not underestimate the value of doing nothing.", a: "Winnie the Pooh", t: "rest" },
{ q: "Silence is a great source of strength.", a: "Anonymous", t: "rest" },
{ q: "There is no such thing as wasted rest.", a: "Crocus", t: "rest" },

/* ?? REFLECT ???????????????????????????????????????? 451–460 */
{ q: "We are what we think. All that we are arises with our thoughts.", a: "Buddha", t: "reflect" },
{ q: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.", a: "Buddha", t: "reflect" },
{ q: "In the end, only three things matter: how much you loved, how gently you lived, and how gracefully you let go of things not meant for you.", a: "Buddha", t: "reflect" },
{ q: "Better than a thousand hollow words is one word that brings peace.", a: "Buddha", t: "reflect" },
{ q: "Holding on to anger is like grasping a hot coal with the intent of throwing it at someone else; you are the one who gets burned.", a: "Buddha", t: "reflect" },
{ q: "There is no path to happiness: happiness is the path.", a: "Buddha", t: "reflect" },
{ q: "The mind is everything. What you think you become.", a: "Buddha", t: "reflect" },
{ q: "What you are is what you have been. What you'll be is what you do now.", a: "Buddha", t: "reflect" },
{ q: "Peace comes from within. Do not seek it without.", a: "Buddha", t: "reflect" },
{ q: "Three things cannot be long hidden: the sun, the moon, and the truth.", a: "Buddha", t: "reflect" },

/* ?? COURAGE ???????????????????????????????????????? 461–470 */
{ q: "To live is the rarest thing in the world. Most people exist, that is all.", a: "Oscar Wilde", t: "courage" },
{ q: "Be yourself; everyone else is already taken.", a: "Oscar Wilde", t: "courage" },
{ q: "We are all in the gutter, but some of us are looking at the stars.", a: "Oscar Wilde", t: "courage" },
{ q: "The only way to get rid of temptation is to yield to it.", a: "Oscar Wilde", t: "courage" },
{ q: "Every saint has a past, and every sinner has a future.", a: "Oscar Wilde", t: "courage" },
{ q: "You can never be overdressed or overeducated.", a: "Oscar Wilde", t: "courage" },
{ q: "The truth is rarely pure and never simple.", a: "Oscar Wilde", t: "courage" },
{ q: "A dreamer is one who can only find his way by moonlight.", a: "Oscar Wilde", t: "courage" },
{ q: "Experience is simply the name we give our mistakes.", a: "Oscar Wilde", t: "courage" },
{ q: "The best way to make your dreams come true is to wake up.", a: "Oscar Wilde", t: "courage" },

/* ?? PATIENCE ??????????????????????????????????????? 471–480 */
{ q: "With the right amount of patience, anything can be achieved.", a: "Anonymous", t: "patience" },
{ q: "Patience is the art of hoping.", a: "Luc de Clapiers", t: "patience" },
{ q: "The secret of patience: do something else in the meantime.", a: "Anonymous", t: "patience" },
{ q: "Patience and silence are powerful energies.", a: "Anonymous", t: "patience" },
{ q: "Wait for the right moment. Then wait a moment more.", a: "Crocus", t: "patience" },
{ q: "Slow is not the same as late.", a: "Anonymous", t: "patience" },
{ q: "You don't always need a plan. Sometimes you just need to breathe, trust, let go and see what happens.", a: "Mandy Hale", t: "patience" },
{ q: "There is a season for everything. Trust the timing of your life.", a: "Anonymous", t: "patience" },
{ q: "The best things in life are not rushed.", a: "Crocus", t: "patience" },
{ q: "Time heals almost everything. Give time a chance.", a: "Anonymous", t: "patience" },

/* ?? WONDER ????????????????????????????????????????? 481–490 */
{ q: "The true sign of intelligence is not knowledge but imagination.", a: "Albert Einstein", t: "wonder" },
{ q: "Imagination is more important than knowledge. Knowledge is limited. Imagination encircles the world.", a: "Albert Einstein", t: "wonder" },
{ q: "I have no special talents. I am only passionately curious.", a: "Albert Einstein", t: "wonder" },
{ q: "Try not to become a person of success, but rather try to become a person of value.", a: "Albert Einstein", t: "wonder" },
{ q: "Anyone who has never made a mistake has never tried anything new.", a: "Albert Einstein", t: "wonder" },
{ q: "Learn from yesterday, live for today, hope for tomorrow.", a: "Albert Einstein", t: "wonder" },
{ q: "Logic will get you from A to Z; imagination will get you everywhere.", a: "Albert Einstein", t: "wonder" },
{ q: "Once we accept our limits, we go beyond them.", a: "Albert Einstein", t: "wonder" },
{ q: "If you can't explain it to a six year old, you don't understand it yourself.", a: "Albert Einstein", t: "wonder" },
{ q: "Life is like riding a bicycle. To keep your balance, you must keep moving.", a: "Albert Einstein", t: "wonder" },

/* ?? PRESENCE ??????????????????????????????????????? 491–500 */
{ q: "Do not look back with regret, nor forward with fear, but around with awareness.", a: "Anonymous", t: "presence" },
{ q: "Wherever you are, be there completely.", a: "Anonymous", t: "presence" },
{ q: "Life is available only in the present moment.", a: "Thich Nhat Hanh", t: "presence" },
{ q: "Realize deeply that the present moment is all you will ever have.", a: "Eckhart Tolle", t: "presence" },
{ q: "This too shall pass.", a: "Persian Proverb", t: "presence" },
{ q: "You are exactly where you need to be.", a: "Anonymous", t: "presence" },
{ q: "The only thing that is ultimately real about your journey is the step that you are taking at this moment.", a: "Eckhart Tolle", t: "presence" },
{ q: "Notice the small things. They are the whole thing.", a: "Crocus", t: "presence" },
{ q: "Presence is the greatest gift you can give.", a: "Anonymous", t: "presence" },
{ q: "Now is all there is.", a: "Crocus", t: "presence" },


/* ============================================================
 *  BATCH 6 — quotes 501–600
 * ============================================================ */

/* ?? FOCUS ????????????????????????????????????????? 501–510 */
{ q: "Doing the right thing at the right time is more important than doing many things.", a: "Anonymous", t: "focus" },
{ q: "Put your entire soul into the smallest act you do.", a: "Anonymous", t: "focus" },
{ q: "The person who chases two rabbits catches neither.", a: "Confucius", t: "focus" },
{ q: "Study the past if you would define the future.", a: "Confucius", t: "focus" },
{ q: "It does not matter how slowly you go so long as you do not stop.", a: "Confucius", t: "focus" },
{ q: "Real knowledge is to know the extent of one's ignorance.", a: "Confucius", t: "focus" },
{ q: "When it is obvious that the goals cannot be reached, don't adjust the goals, adjust the action steps.", a: "Confucius", t: "focus" },
{ q: "The man who moves a mountain begins by carrying away small stones.", a: "Confucius", t: "focus" },
{ q: "Choose a job you love, and you will never have to work a day in your life.", a: "Confucius", t: "focus" },
{ q: "Wherever you go, go with all your heart.", a: "Confucius", t: "focus" },

/* ?? CALM ?????????????????????????????????????????? 511–520 */
{ q: "The journey is the reward.", a: "Chinese Proverb", t: "calm" },
{ q: "A truly good person never feels lost.", a: "Confucius", t: "calm" },
{ q: "We can never obtain peace in the outer world until we make peace with ourselves.", a: "Dalai Lama", t: "calm" },
{ q: "If you want others to be happy, practice compassion. If you want to be happy, practice compassion.", a: "Dalai Lama", t: "calm" },
{ q: "Happiness is not something ready made. It comes from your own actions.", a: "Dalai Lama", t: "calm" },
{ q: "Love and compassion are necessities, not luxuries.", a: "Dalai Lama", t: "calm" },
{ q: "Remember that sometimes not getting what you want is a wonderful stroke of luck.", a: "Dalai Lama", t: "calm" },
{ q: "The purpose of our lives is to be happy.", a: "Dalai Lama", t: "calm" },
{ q: "Sleep is the best meditation.", a: "Dalai Lama", t: "calm" },
{ q: "Be kind whenever possible. It is always possible.", a: "Dalai Lama", t: "calm" },

/* ?? BEGIN ????????????????????????????????????????? 521–530 */
{ q: "Every great story begins with a single, small, unremarkable decision.", a: "Anonymous", t: "begin" },
{ q: "The first step is the hardest. Take it anyway.", a: "Anonymous", t: "begin" },
{ q: "You don't need to know the whole path. Just the next step.", a: "Anonymous", t: "begin" },
{ q: "Start small. Start now. Start with what you have.", a: "Crocus", t: "begin" },
{ q: "If you want to be something you've never been, you must do something you've never done.", a: "Anonymous", t: "begin" },
{ q: "Plant the seed. Then let the garden do the work.", a: "Crocus", t: "begin" },
{ q: "Rivers start as raindrops.", a: "Crocus", t: "begin" },
{ q: "Nothing begins in full bloom.", a: "Crocus", t: "begin" },
{ q: "Do not wait for perfect conditions. Begin anyway.", a: "Anonymous", t: "begin" },
{ q: "Every morning is a chance to begin again.", a: "Anonymous", t: "begin" },

/* ?? PERSIST ???????????????????????????????????????? 531–540 */
{ q: "Slow progress is still progress.", a: "Anonymous", t: "persist" },
{ q: "You are not behind. You are exactly on time for your own life.", a: "Anonymous", t: "persist" },
{ q: "Keep watering the seed. It will bloom when it's ready.", a: "Crocus", t: "persist" },
{ q: "Some days the only win is that you kept going.", a: "Anonymous", t: "persist" },
{ q: "Consistency beats intensity over time.", a: "Anonymous", t: "persist" },
{ q: "Show up. Especially on the days you don't want to.", a: "Anonymous", t: "persist" },
{ q: "You don't have to be great today. You just have to be present.", a: "Anonymous", t: "persist" },
{ q: "Growth is rarely visible in the moment.", a: "Crocus", t: "persist" },
{ q: "The seed does not rush. Neither should you.", a: "Crocus", t: "persist" },
{ q: "One more day. That's all. One more day.", a: "Anonymous", t: "persist" },

/* ?? REST ??????????????????????????????????????????? 541–550 */
{ q: "There is virtue in rest.", a: "Anonymous", t: "rest" },
{ q: "Rest is productive.", a: "Anonymous", t: "rest" },
{ q: "Do less. You'll be more.", a: "Anonymous", t: "rest" },
{ q: "Not every moment needs to be filled.", a: "Crocus", t: "rest" },
{ q: "Stillness is not laziness.", a: "Anonymous", t: "rest" },
{ q: "You don't need permission to rest.", a: "Crocus", t: "rest" },
{ q: "Even the earth rests in winter.", a: "Crocus", t: "rest" },
{ q: "Put down the load. It will still be there tomorrow.", a: "Anonymous", t: "rest" },
{ q: "Rest is where strength is rebuilt.", a: "Anonymous", t: "rest" },
{ q: "Silence is a form of rest.", a: "Anonymous", t: "rest" },

/* ?? REFLECT ???????????????????????????????????????? 551–560 */
{ q: "Everything changes when you change.", a: "Anonymous", t: "reflect" },
{ q: "You cannot heal what you do not feel.", a: "Anonymous", t: "reflect" },
{ q: "What you resist, persists.", a: "Carl Jung", t: "reflect" },
{ q: "Until you make the unconscious conscious, it will direct your life and you will call it fate.", a: "Carl Jung", t: "reflect" },
{ q: "Who looks outside, dreams; who looks inside, awakes.", a: "Carl Jung", t: "reflect" },
{ q: "I am not what happened to me. I am what I choose to become.", a: "Carl Jung", t: "reflect" },
{ q: "The meeting of two personalities is like the contact of two chemical substances: if there is any reaction, both are transformed.", a: "Carl Jung", t: "reflect" },
{ q: "Your visions will become clear only when you can look into your own heart.", a: "Carl Jung", t: "reflect" },
{ q: "Knowing your own darkness is the best method for dealing with the darknesses of other people.", a: "Carl Jung", t: "reflect" },
{ q: "The privilege of a lifetime is to become who you truly are.", a: "Carl Jung", t: "reflect" },

/* ?? COURAGE ???????????????????????????????????????? 561–570 */
{ q: "Life is either a daring adventure or nothing at all.", a: "Helen Keller", t: "courage" },
{ q: "The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart.", a: "Helen Keller", t: "courage" },
{ q: "Optimism is the faith that leads to achievement.", a: "Helen Keller", t: "courage" },
{ q: "Alone we can do so little; together we can do so much.", a: "Helen Keller", t: "courage" },
{ q: "Keep your face to the sunshine and you cannot see a shadow.", a: "Helen Keller", t: "courage" },
{ q: "What we have once enjoyed we can never lose. All that we love deeply becomes a part of us.", a: "Helen Keller", t: "courage" },
{ q: "Character cannot be developed in ease and quiet.", a: "Helen Keller", t: "courage" },
{ q: "Although the world is full of suffering, it is also full of the overcoming of it.", a: "Helen Keller", t: "courage" },
{ q: "Face your deficiencies and acknowledge them; but do not let them master you.", a: "Helen Keller", t: "courage" },
{ q: "Life is a succession of lessons which must be lived to be understood.", a: "Helen Keller", t: "courage" },

/* ?? PATIENCE ??????????????????????????????????????? 571–580 */
{ q: "Trust the process. Trust the timing.", a: "Anonymous", t: "patience" },
{ q: "Things take the time they take.", a: "Anonymous", t: "patience" },
{ q: "You cannot hurry a flower into bloom.", a: "Crocus", t: "patience" },
{ q: "The best things ripen slowly.", a: "Anonymous", t: "patience" },
{ q: "Slow down. You're exactly where you're supposed to be.", a: "Anonymous", t: "patience" },
{ q: "The right thing at the wrong time is still the wrong thing.", a: "Anonymous", t: "patience" },
{ q: "Wait. It is a skill, not a punishment.", a: "Crocus", t: "patience" },
{ q: "All will come to you in time if you let it.", a: "Anonymous", t: "patience" },
{ q: "Patience is a form of wisdom.", a: "Anonymous", t: "patience" },
{ q: "There is no such thing as wasted time.", a: "Crocus", t: "patience" },

/* ?? WONDER ????????????????????????????????????????? 581–590 */
{ q: "The best way to observe a fish is to become a fish.", a: "Jacques Cousteau", t: "wonder" },
{ q: "The sea, once it casts its spell, holds one in its net of wonder forever.", a: "Jacques Cousteau", t: "wonder" },
{ q: "People protect what they love.", a: "Jacques Cousteau", t: "wonder" },
{ q: "From birth, man carries the weight of gravity on his shoulders. He is bolted to earth. But man has only to sink beneath the surface and he is free.", a: "Jacques Cousteau", t: "wonder" },
{ q: "If we go on the way we have, the fault is our greed.", a: "Jacques Cousteau", t: "wonder" },
{ q: "The happiness of the bee and the dolphin is to exist. For man it is to know that and to wonder at it.", a: "Jacques Cousteau", t: "wonder" },
{ q: "Every drop of water is a small world.", a: "Crocus", t: "wonder" },
{ q: "The universe is not only stranger than we imagine, it is stranger than we can imagine.", a: "J.B.S. Haldane", t: "wonder" },
{ q: "Not only is the universe stranger than we think, it is stranger than we can think.", a: "Werner Heisenberg", t: "wonder" },
{ q: "The first gulp from the glass of natural sciences will turn you into an atheist, but at the bottom of the glass God is waiting for you.", a: "Werner Heisenberg", t: "wonder" },

/* ?? PRESENCE ??????????????????????????????????????? 591–600 */
{ q: "One moment can change a day, one day can change a life, and one life can change the world.", a: "Anonymous", t: "presence" },
{ q: "The smallest act of kindness is worth more than the grandest intention.", a: "Oscar Wilde", t: "presence" },
{ q: "Be here. Be now. Be you.", a: "Crocus", t: "presence" },
{ q: "Attention is the purest and rarest form of generosity.", a: "Simone Weil", t: "presence" },
{ q: "To live in the present is to be free.", a: "Anonymous", t: "presence" },
{ q: "The now is the only thing you truly own.", a: "Anonymous", t: "presence" },
{ q: "Notice the breath. Notice the sky. Notice the small good things.", a: "Crocus", t: "presence" },
{ q: "Being present is a practice, not a destination.", a: "Anonymous", t: "presence" },
{ q: "You are here. You are alive. You are enough.", a: "Crocus", t: "presence" },
{ q: "This moment. Just this moment. That is all.", a: "Crocus", t: "presence" },
/* ============================================================
 *  BATCH 7 — quotes 601–700
 * ============================================================ */

/* ?? FOCUS ????????????????????????????????????????? 601–610 */
{ q: "The successful warrior is the average person with laser-like focus.", a: "Anonymous", t: "focus" },
{ q: "Depth beats breadth. Go deep, not wide.", a: "Crocus", t: "focus" },
{ q: "One task, fully done, is worth ten half-done.", a: "Anonymous", t: "focus" },
{ q: "The most important thing is to keep the most important thing the most important thing.", a: "Anonymous", t: "focus" },
{ q: "Attention is a muscle. Train it.", a: "Anonymous", t: "focus" },
{ q: "Multi-tasking is the art of doing many things badly at once.", a: "Anonymous", t: "focus" },
{ q: "Do the hard thing first. The day softens after.", a: "Anonymous", t: "focus" },
{ q: "Busy is not the same as productive.", a: "Anonymous", t: "focus" },
{ q: "Quality of attention determines quality of life.", a: "Anonymous", t: "focus" },
{ q: "Fewer inputs. Deeper outputs.", a: "Crocus", t: "focus" },

/* ?? CALM ?????????????????????????????????????????? 611–620 */
{ q: "You are the sky. Everything else is just the weather.", a: "Pema Chödrön", t: "calm" },
{ q: "Nothing ever goes away until it has taught us what we need to know.", a: "Pema Chödrön", t: "calm" },
{ q: "The only reason we don't open our hearts and minds to other people is that they trigger confusion in us.", a: "Pema Chödrön", t: "calm" },
{ q: "Be curious, not judgmental.", a: "Walt Whitman", t: "calm" },
{ q: "Keep your face always toward the sunshine — and shadows will fall behind you.", a: "Walt Whitman", t: "calm" },
{ q: "I am large, I contain multitudes.", a: "Walt Whitman", t: "calm" },
{ q: "Peace is always beautiful.", a: "Walt Whitman", t: "calm" },
{ q: "Simplicity is the glory of expression.", a: "Walt Whitman", t: "calm" },
{ q: "Happiness, not in another place but this place, not for another hour but this hour.", a: "Walt Whitman", t: "calm" },
{ q: "The strongest and sweetest songs yet remain to be sung.", a: "Walt Whitman", t: "calm" },

/* ?? BEGIN ????????????????????????????????????????? 621–630 */
{ q: "There is no perfect time. There is only now.", a: "Anonymous", t: "begin" },
{ q: "Tomorrow is a fresh start, but today is a fresh choice.", a: "Anonymous", t: "begin" },
{ q: "Begin with what you have. Build with what you know.", a: "Crocus", t: "begin" },
{ q: "The best way to get started is to stop talking and start doing.", a: "Walt Disney", t: "begin" },
{ q: "You don't need a new day. You need a new decision.", a: "Anonymous", t: "begin" },
{ q: "Small beginnings are the launchpad of great endings.", a: "Anonymous", t: "begin" },
{ q: "Every sunrise is an invitation to begin again.", a: "Crocus", t: "begin" },
{ q: "Don't wait for the starting gun. Start.", a: "Anonymous", t: "begin" },
{ q: "The door to change opens from the inside.", a: "Anonymous", t: "begin" },
{ q: "Plant today. Harvest tomorrow.", a: "Crocus", t: "begin" },

/* ?? PERSIST ???????????????????????????????????????? 631–640 */
{ q: "Success is not overnight. It is every night.", a: "Anonymous", t: "persist" },
{ q: "The stone that the builder refused often becomes the cornerstone.", a: "Psalm 118:22", t: "persist" },
{ q: "What is deferred is not denied.", a: "Anonymous", t: "persist" },
{ q: "Keep the faith. Keep the pace. Keep going.", a: "Crocus", t: "persist" },
{ q: "Endurance is the twin sister of excellence.", a: "Anonymous", t: "persist" },
{ q: "You are building something invisible. Trust the process.", a: "Crocus", t: "persist" },
{ q: "Every small step is still a step forward.", a: "Anonymous", t: "persist" },
{ q: "You will not always feel motivated. Do it anyway.", a: "Anonymous", t: "persist" },
{ q: "The work works on you while you work on it.", a: "Anonymous", t: "persist" },
{ q: "Keep the light on. Keep showing up.", a: "Crocus", t: "persist" },

/* ?? REST ??????????????????????????????????????????? 641–650 */
{ q: "Do not let the day rob you of the night.", a: "Anonymous", t: "rest" },
{ q: "Give your body the rest it is asking for.", a: "Crocus", t: "rest" },
{ q: "Rest is not a reward. It is a rhythm.", a: "Anonymous", t: "rest" },
{ q: "Even the moon has phases. So do you.", a: "Crocus", t: "rest" },
{ q: "Tired is not the same as finished.", a: "Anonymous", t: "rest" },
{ q: "The best version of you needs sleep, water, and stillness.", a: "Anonymous", t: "rest" },
{ q: "Quiet is a form of power.", a: "Crocus", t: "rest" },
{ q: "Let the day rest on your shoulders. Then let it go.", a: "Crocus", t: "rest" },
{ q: "Nothing blooms year-round. Neither do you.", a: "Crocus", t: "rest" },
{ q: "Rest well. Tomorrow needs you whole.", a: "Crocus", t: "rest" },

/* ?? REFLECT ???????????????????????????????????????? 651–660 */
{ q: "You can't go back and change the beginning, but you can start where you are and change the ending.", a: "C.S. Lewis", t: "reflect" },
{ q: "You are never too old to set another goal or to dream a new dream.", a: "C.S. Lewis", t: "reflect" },
{ q: "Integrity is doing the right thing, even when no one is watching.", a: "C.S. Lewis", t: "reflect" },
{ q: "Hardship often prepares an ordinary person for an extraordinary destiny.", a: "C.S. Lewis", t: "reflect" },
{ q: "We are what we believe we are.", a: "C.S. Lewis", t: "reflect" },
{ q: "Courage, dear heart.", a: "C.S. Lewis", t: "reflect" },
{ q: "The task of the modern educator is not to cut down jungles, but to irrigate deserts.", a: "C.S. Lewis", t: "reflect" },
{ q: "Friendship is born at that moment when one person says to another, 'What! You too?'", a: "C.S. Lewis", t: "reflect" },
{ q: "Miracles are a retelling in small letters of the very same story which is written across the whole world in letters too large for some of us to see.", a: "C.S. Lewis", t: "reflect" },
{ q: "Once you have read a book, you are never quite the same again.", a: "Anonymous", t: "reflect" },

/* ?? COURAGE ???????????????????????????????????????? 661–670 */
{ q: "The wound is where the light enters, but only if you let it.", a: "Anonymous", t: "courage" },
{ q: "The bravest thing you can do is ask for help.", a: "Anonymous", t: "courage" },
{ q: "Weakness is not the opposite of strength. Fear is.", a: "Anonymous", t: "courage" },
{ q: "Do the thing you cannot do. That's where the growth is.", a: "Anonymous", t: "courage" },
{ q: "You were not built to hide.", a: "Crocus", t: "courage" },
{ q: "Say the thing. Take the risk. Begin the change.", a: "Anonymous", t: "courage" },
{ q: "Every great love story begins with someone brave enough to speak first.", a: "Anonymous", t: "courage" },
{ q: "Stand up. Even if your knees shake.", a: "Crocus", t: "courage" },
{ q: "Be the kind of person you needed when you were younger.", a: "Anonymous", t: "courage" },
{ q: "You survived every hard day so far. That's not luck. That's you.", a: "Anonymous", t: "courage" },

/* ?? PATIENCE ??????????????????????????????????????? 671–680 */
{ q: "Trust the slow work of time.", a: "Crocus", t: "patience" },
{ q: "Everything has a season, including your dreams.", a: "Anonymous", t: "patience" },
{ q: "There is wisdom in waiting.", a: "Anonymous", t: "patience" },
{ q: "Do not mistake slow for stuck.", a: "Crocus", t: "patience" },
{ q: "The seed spends months in the dark before it blooms.", a: "Crocus", t: "patience" },
{ q: "Let things come to you in their own time.", a: "Anonymous", t: "patience" },
{ q: "Steady is a strength.", a: "Crocus", t: "patience" },
{ q: "One day the pieces will all make sense.", a: "Anonymous", t: "patience" },
{ q: "Be patient with yourself. You are still becoming.", a: "Crocus", t: "patience" },
{ q: "Wait with hope. It changes the quality of the wait.", a: "Anonymous", t: "patience" },

/* ?? WONDER ????????????????????????????????????????? 681–690 */
{ q: "The clearest way into the universe is through a forest wilderness.", a: "John Muir", t: "wonder" },
{ q: "To see a world in a grain of sand, and a heaven in a wild flower.", a: "William Blake", t: "wonder" },
{ q: "The stars are the streetlights of eternity.", a: "Anonymous", t: "wonder" },
{ q: "Every flower is a soul blossoming in nature.", a: "Gérard de Nerval", t: "wonder" },
{ q: "The sea is a desert of waves, and each wave is a new world.", a: "Anonymous", t: "wonder" },
{ q: "Wonder is the seed of all knowledge.", a: "Anonymous", t: "wonder" },
{ q: "Nature never says one thing and does another.", a: "Anonymous", t: "wonder" },
{ q: "The smallest flower is a thought, a life answering to some purpose.", a: "Crocus", t: "wonder" },
{ q: "Every star is a sun someone else is looking up at.", a: "Anonymous", t: "wonder" },
{ q: "The world is more interesting than any of us realize.", a: "Anonymous", t: "wonder" },

/* ?? PRESENCE ??????????????????????????????????????? 691–700 */
{ q: "Be here. There is no other place.", a: "Crocus", t: "presence" },
{ q: "The moment is a gift. That is why it is called the present.", a: "Anonymous", t: "presence" },
{ q: "To be present is to be awake.", a: "Anonymous", t: "presence" },
{ q: "You don't have to solve the whole future. Just live today well.", a: "Anonymous", t: "presence" },
{ q: "Notice what is good right now.", a: "Crocus", t: "presence" },
{ q: "This moment holds everything you need.", a: "Crocus", t: "presence" },
{ q: "The past is a memory. The future is a thought. Only this is real.", a: "Anonymous", t: "presence" },
{ q: "Listen. Really listen. To the world, and to yourself.", a: "Crocus", t: "presence" },
{ q: "Being is not doing. Practice being.", a: "Anonymous", t: "presence" },
{ q: "Right here, right now, you are held.", a: "Crocus", t: "presence" },


/* ============================================================
 *  BATCH 8 — quotes 701–800
 * ============================================================ */

/* ?? FOCUS ????????????????????????????????????????? 701–710 */
{ q: "The disciplined are free.", a: "Aristotle", t: "focus" },
{ q: "We are what we repeatedly do. Excellence is a habit.", a: "Will Durant", t: "focus" },
{ q: "Small disciplines repeated with consistency every day lead to great achievements gained slowly over time.", a: "John Maxwell", t: "focus" },
{ q: "You will never change your life until you change something you do daily.", a: "John Maxwell", t: "focus" },
{ q: "Discipline is the bridge between goals and accomplishment.", a: "Jim Rohn", t: "focus" },
{ q: "Either you run the day or the day runs you.", a: "Jim Rohn", t: "focus" },
{ q: "Motivation is what gets you started. Habit is what keeps you going.", a: "Jim Rohn", t: "focus" },
{ q: "Success is nothing more than a few simple disciplines, practiced every day.", a: "Jim Rohn", t: "focus" },
{ q: "Don't wish it were easier. Wish you were better.", a: "Jim Rohn", t: "focus" },
{ q: "If you don't design your own life plan, chances are you'll fall into someone else's.", a: "Jim Rohn", t: "focus" },

/* ?? CALM ?????????????????????????????????????????? 711–720 */
{ q: "Rivers know this: there is no hurry. We shall get there some day.", a: "A.A. Milne", t: "calm" },
{ q: "Doing nothing often leads to the very best of something.", a: "A.A. Milne", t: "calm" },
{ q: "The things that make me different are the things that make me.", a: "A.A. Milne", t: "calm" },
{ q: "You are braver than you believe, stronger than you seem, and smarter than you think.", a: "A.A. Milne", t: "calm" },
{ q: "Sometimes the smallest things take up the most room in your heart.", a: "A.A. Milne", t: "calm" },
{ q: "How lucky I am to have something that makes saying goodbye so hard.", a: "A.A. Milne", t: "calm" },
{ q: "What day is it? It's today. My favorite day.", a: "A.A. Milne", t: "calm" },
{ q: "Promise me you'll always remember: you're braver than you believe.", a: "A.A. Milne", t: "calm" },
{ q: "If there ever comes a day when we can't be together, keep me in your heart. I'll stay there forever.", a: "A.A. Milne", t: "calm" },
{ q: "A little consideration, a little thought for others, makes all the difference.", a: "A.A. Milne", t: "calm" },

/* ?? BEGIN ????????????????????????????????????????? 721–730 */
{ q: "You miss 100% of the shots you don't take.", a: "Wayne Gretzky", t: "begin" },
{ q: "The way to get started is to quit talking and begin doing.", a: "Anonymous", t: "begin" },
{ q: "It always seems impossible until it's done.", a: "Anonymous", t: "begin" },
{ q: "Don't watch the clock. Do what it does. Keep going.", a: "Sam Levenson", t: "begin" },
{ q: "The best preparation for tomorrow is doing your best today.", a: "H. Jackson Brown Jr.", t: "begin" },
{ q: "What we fear of doing most is usually what we most need to do.", a: "Tim Ferriss", t: "begin" },
{ q: "You don't have to see the whole path. Just start walking.", a: "Crocus", t: "begin" },
{ q: "Make the beginning small. Make it kind. But make it today.", a: "Crocus", t: "begin" },
{ q: "Do not despise the day of small beginnings.", a: "Zechariah 4:10", t: "begin" },
{ q: "Start where you stand.", a: "Anonymous", t: "begin" },

/* ?? PERSIST ???????????????????????????????????????? 731–740 */
{ q: "The world is moved along, not only by the mighty shoves of its heroes, but also by the aggregate of tiny pushes of each honest worker.", a: "Helen Keller", t: "persist" },
{ q: "Keep your face to the sun and you cannot see a shadow.", a: "Helen Keller", t: "persist" },
{ q: "Every small effort counts. Every day, every hour.", a: "Anonymous", t: "persist" },
{ q: "You cannot fail if you do not quit.", a: "Anonymous", t: "persist" },
{ q: "The key is not to be perfect, but to keep practicing.", a: "Anonymous", t: "persist" },
{ q: "Consistency is the quiet superpower.", a: "Crocus", t: "persist" },
{ q: "Do it today. Again tomorrow. That's how it happens.", a: "Anonymous", t: "persist" },
{ q: "Small steps, every day, become long journeys.", a: "Crocus", t: "persist" },
{ q: "The strongest people are not those who show strength in front of us, but those who win battles we know nothing about.", a: "Anonymous", t: "persist" },
{ q: "You are allowed to be a work in progress and a masterpiece at the same time.", a: "Anonymous", t: "persist" },

/* ?? REST ??????????????????????????????????????????? 741–750 */
{ q: "Rest is not laziness. Rest is replenishment.", a: "Anonymous", t: "rest" },
{ q: "You need three things daily: movement, stillness, and sleep.", a: "Crocus", t: "rest" },
{ q: "The best ideas come when you're not forcing them.", a: "Anonymous", t: "rest" },
{ q: "Give yourself permission to pause.", a: "Crocus", t: "rest" },
{ q: "Rest your eyes. Rest your mind. Rest your heart.", a: "Crocus", t: "rest" },
{ q: "Even the sun sets. Why shouldn't you?", a: "Anonymous", t: "rest" },
{ q: "Slow down. You are allowed.", a: "Crocus", t: "rest" },
{ q: "The most underrated productivity hack is sleep.", a: "Anonymous", t: "rest" },
{ q: "You don't need to earn rest. You need it.", a: "Crocus", t: "rest" },
{ q: "Pause is not procrastination.", a: "Anonymous", t: "rest" },

/* ?? REFLECT ???????????????????????????????????????? 751–760 */
{ q: "The years teach much which the days never know.", a: "Ralph Waldo Emerson", t: "reflect" },
{ q: "What you do speaks so loudly that I cannot hear what you say.", a: "Ralph Waldo Emerson", t: "reflect" },
{ q: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", a: "Ralph Waldo Emerson", t: "reflect" },
{ q: "Do not go where the path may lead, go instead where there is no path and leave a trail.", a: "Ralph Waldo Emerson", t: "reflect" },
{ q: "The only way to have a friend is to be one.", a: "Ralph Waldo Emerson", t: "reflect" },
{ q: "For every minute you are angry you lose sixty seconds of happiness.", a: "Ralph Waldo Emerson", t: "reflect" },
{ q: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", a: "Ralph Waldo Emerson", t: "reflect" },
{ q: "Live in the sunshine, swim the sea, drink the wild air.", a: "Ralph Waldo Emerson", t: "reflect" },
{ q: "Nothing great was ever achieved without enthusiasm.", a: "Ralph Waldo Emerson", t: "reflect" },
{ q: "The only person you are destined to become is the person you decide to be.", a: "Ralph Waldo Emerson", t: "reflect" },

/* ?? COURAGE ???????????????????????????????????????? 761–770 */
{ q: "Perhaps all the dragons in our lives are princesses who are only waiting to see us act, just once, with beauty and courage.", a: "Rainer Maria Rilke", t: "courage" },
{ q: "Be patient toward all that is unsolved in your heart and try to love the questions themselves.", a: "Rainer Maria Rilke", t: "courage" },
{ q: "Let everything happen to you: beauty and terror. Just keep going.", a: "Rainer Maria Rilke", t: "courage" },
{ q: "The only journey is the one within.", a: "Rainer Maria Rilke", t: "courage" },
{ q: "Live the questions now. Perhaps you will then gradually, without noticing it, live along some distant day into the answer.", a: "Rainer Maria Rilke", t: "courage" },
{ q: "Believe in a love that is being stored up for you like an inheritance.", a: "Rainer Maria Rilke", t: "courage" },
{ q: "Do not assume that he who seeks to comfort you now lives untroubled among the simple and quiet words that sometimes do you good.", a: "Rainer Maria Rilke", t: "courage" },
{ q: "I hold this to be the highest task of a bond between two people: that each should stand guard over the solitude of the other.", a: "Rainer Maria Rilke", t: "courage" },
{ q: "For one human being to love another: that is perhaps the most difficult of all our tasks.", a: "Rainer Maria Rilke", t: "courage" },
{ q: "Love consists in this, that two solitudes protect and border and salute each other.", a: "Rainer Maria Rilke", t: "courage" },

/* ?? PATIENCE ??????????????????????????????????????? 771–780 */
{ q: "All things come round to him who will but wait.", a: "Henry Wadsworth Longfellow", t: "patience" },
{ q: "The heights by great men reached and kept were not attained by sudden flight, but they, while their companions slept, were toiling upward in the night.", a: "Henry Wadsworth Longfellow", t: "patience" },
{ q: "Perseverance is not a long race; it is many short races one after another.", a: "Walter Elliot", t: "patience" },
{ q: "With time and patience, the mulberry leaf becomes silk.", a: "Chinese Proverb", t: "patience" },
{ q: "The patience of a gardener is the faith of a saint.", a: "Anonymous", t: "patience" },
{ q: "The longest way round is the shortest way home.", a: "Anonymous", t: "patience" },
{ q: "You don't have to rush. Life unfolds at its own pace.", a: "Crocus", t: "patience" },
{ q: "The most valuable things take the longest to grow.", a: "Crocus", t: "patience" },
{ q: "Give it time. Time is generous to those who wait with grace.", a: "Anonymous", t: "patience" },
{ q: "Patience is the art of hoping.", a: "Vauvenargues", t: "patience" },

/* ?? WONDER ????????????????????????????????????????? 781–790 */
{ q: "The world is a book, and those who do not travel read only one page.", a: "Anonymous", t: "wonder" },
{ q: "Travel is fatal to prejudice, bigotry, and narrow-mindedness.", a: "Mark Twain", t: "wonder" },
{ q: "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did.", a: "Mark Twain", t: "wonder" },
{ q: "The secret of getting ahead is getting started.", a: "Mark Twain", t: "wonder" },
{ q: "Kindness is a language which the deaf can hear and the blind can see.", a: "Mark Twain", t: "wonder" },
{ q: "Never put off till tomorrow what may be done day after tomorrow just as well.", a: "Mark Twain", t: "wonder" },
{ q: "The two most important days in your life are the day you are born and the day you find out why.", a: "Mark Twain", t: "wonder" },
{ q: "Courage is resistance to fear, mastery of fear — not absence of fear.", a: "Mark Twain", t: "wonder" },
{ q: "Wrinkles should merely indicate where smiles have been.", a: "Mark Twain", t: "wonder" },
{ q: "Do something every day that you don't want to do.", a: "Mark Twain", t: "wonder" },

/* ?? PRESENCE ??????????????????????????????????????? 791–800 */
{ q: "Be present. It is the hardest and most rewarding thing.", a: "Anonymous", t: "presence" },
{ q: "Mindfulness is not hard. It is just remembering to be here.", a: "Crocus", t: "presence" },
{ q: "The breath is the anchor. Always available. Always enough.", a: "Crocus", t: "presence" },
{ q: "Nothing to fix. Nothing to chase. Just this.", a: "Anonymous", t: "presence" },
{ q: "You are not your thoughts. You are the space they move through.", a: "Anonymous", t: "presence" },
{ q: "Listen to the quiet. It has much to say.", a: "Crocus", t: "presence" },
{ q: "The present moment is a doorway. Walk through it.", a: "Anonymous", t: "presence" },
{ q: "Return to the breath. Again and again.", a: "Crocus", t: "presence" },
{ q: "You don't need to be anywhere else. You are already here.", a: "Crocus", t: "presence" },
{ q: "Wherever you are, be there.", a: "Anonymous", t: "presence" },


/* ============================================================
 *  BATCH 9 — quotes 801–900
 * ============================================================ */

/* ?? FOCUS ????????????????????????????????????????? 801–810 */
{ q: "The sun's rays do not burn until brought to a point.", a: "Anonymous", t: "focus" },
{ q: "Focus is the art of knowing what to ignore.", a: "Anonymous", t: "focus" },
{ q: "Deep work is the superpower of the twenty-first century.", a: "Cal Newport", t: "focus" },
{ q: "Clarity about what matters provides clarity about what does not.", a: "Cal Newport", t: "focus" },
{ q: "Efforts to deepen your focus will struggle if you don't simultaneously wean your mind from a dependence on distraction.", a: "Cal Newport", t: "focus" },
{ q: "Do not become so busy that you forget why you began.", a: "Anonymous", t: "focus" },
{ q: "To produce at your peak level you need to work for extended periods with full concentration on a single task free from distraction.", a: "Cal Newport", t: "focus" },
{ q: "Who you are, what you think, feel, and do, what you love — is the sum of what you focus on.", a: "Cal Newport", t: "focus" },
{ q: "The ability to concentrate is being replaced by the ability to respond.", a: "Anonymous", t: "focus" },
{ q: "Attention is a resource. Guard it well.", a: "Crocus", t: "focus" },

/* ?? CALM ?????????????????????????????????????????? 811–820 */
{ q: "When you realize nothing is lacking, the whole world belongs to you.", a: "Anonymous", t: "calm" },
{ q: "The mind is like water. When agitated, it becomes difficult to see.", a: "Anonymous", t: "calm" },
{ q: "Let it be. Let it go. Let it flow.", a: "Anonymous", t: "calm" },
{ q: "Wherever you are, be there. Whatever you do, do it fully.", a: "Anonymous", t: "calm" },
{ q: "Slow is smooth. Smooth is fast.", a: "Anonymous", t: "calm" },
{ q: "Peace is not the absence of noise, but the presence of calm.", a: "Anonymous", t: "calm" },
{ q: "Let the storm pass over. You are the sky.", a: "Crocus", t: "calm" },
{ q: "Nothing lasts forever, including this moment of tension.", a: "Anonymous", t: "calm" },
{ q: "Be a soft place to land. For yourself, first.", a: "Crocus", t: "calm" },
{ q: "The calm you seek is already inside you.", a: "Crocus", t: "calm" },

/* ?? BEGIN ????????????????????????????????????????? 821–830 */
{ q: "Today is a new beginning. Treat it that way.", a: "Anonymous", t: "begin" },
{ q: "The only way to start is to start.", a: "Anonymous", t: "begin" },
{ q: "Make a small beginning. Then make another.", a: "Crocus", t: "begin" },
{ q: "You are one small step away from a very different year.", a: "Anonymous", t: "begin" },
{ q: "Begin in faith. Continue in hope. Finish in joy.", a: "Anonymous", t: "begin" },
{ q: "Every river begins as a trickle.", a: "Crocus", t: "begin" },
{ q: "You don't need to know how it ends. Just begin.", a: "Anonymous", t: "begin" },
{ q: "Everything begins with a small yes.", a: "Crocus", t: "begin" },
{ q: "The first move is always the hardest. Take it.", a: "Anonymous", t: "begin" },
{ q: "Now is the perfect time to begin.", a: "Crocus", t: "begin" },

/* ?? PERSIST ???????????????????????????????????????? 831–840 */
{ q: "The only way out is through.", a: "Robert Frost", t: "persist" },
{ q: "When you come to the end of your rope, tie a knot and hang on.", a: "Franklin D. Roosevelt", t: "persist" },
{ q: "It is during our darkest moments that we must focus to see the light.", a: "Aristotle Onassis", t: "persist" },
{ q: "Every day brings new choices.", a: "Martha Beck", t: "persist" },
{ q: "You do not find a happy life. You make it.", a: "Camilla Eyring Kimball", t: "persist" },
{ q: "Your hardest times often lead to the greatest moments of your life.", a: "Roy T. Bennett", t: "persist" },
{ q: "Do what is right, not what is easy.", a: "Roy T. Bennett", t: "persist" },
{ q: "The one who falls and gets up is stronger than the one who never tried.", a: "Roy T. Bennett", t: "persist" },
{ q: "If you want to live a happy life, tie it to a goal, not to people or things.", a: "Albert Einstein", t: "persist" },
{ q: "Every setback is a setup for a comeback.", a: "Anonymous", t: "persist" },

/* ?? REST ??????????????????????????????????????????? 841–850 */
{ q: "Do not underestimate the value of rest.", a: "Anonymous", t: "rest" },
{ q: "The body asks for rest. Listen to it.", a: "Crocus", t: "rest" },
{ q: "Recharge. Refocus. Return.", a: "Anonymous", t: "rest" },
{ q: "Rest today so you can rise tomorrow.", a: "Crocus", t: "rest" },
{ q: "There is no productivity without rest.", a: "Anonymous", t: "rest" },
{ q: "Sleep is the cheapest therapy.", a: "Anonymous", t: "rest" },
{ q: "Let your mind wander. It knows the way home.", a: "Crocus", t: "rest" },
{ q: "Step away. The problem will still be there — but you'll be clearer.", a: "Anonymous", t: "rest" },
{ q: "Rest is a skill. Learn it.", a: "Crocus", t: "rest" },
{ q: "Pause. Breathe. Begin again when ready.", a: "Crocus", t: "rest" },

/* ?? REFLECT ???????????????????????????????????????? 851–860 */
{ q: "You are not required to set yourself on fire to keep others warm.", a: "Anonymous", t: "reflect" },
{ q: "The most dangerous phrase in the language is: 'We've always done it this way.'", a: "Grace Hopper", t: "reflect" },
{ q: "It's easier to ask forgiveness than it is to get permission.", a: "Grace Hopper", t: "reflect" },
{ q: "A ship in port is safe, but that's not what ships are built for.", a: "Grace Hopper", t: "reflect" },
{ q: "The most damaging phrase in the language is: 'It's always been done that way.'", a: "Grace Hopper", t: "reflect" },
{ q: "Life is too short to be small.", a: "Benjamin Disraeli", t: "reflect" },
{ q: "The greatest good you can do for another is not just to share your riches but to reveal to him his own.", a: "Benjamin Disraeli", t: "reflect" },
{ q: "Nurture your mind with great thoughts, for you will never go any higher than you think.", a: "Benjamin Disraeli", t: "reflect" },
{ q: "Success is not final. Failure is not fatal. It is the courage to continue that counts.", a: "Anonymous", t: "reflect" },
{ q: "The best way to find yourself is to lose yourself in the service of others.", a: "Mahatma Gandhi", t: "reflect" },

/* ?? COURAGE ???????????????????????????????????????? 861–870 */
{ q: "Be the change you wish to see in the world.", a: "Mahatma Gandhi", t: "courage" },
{ q: "First they ignore you, then they laugh at you, then they fight you, then you win.", a: "Mahatma Gandhi", t: "courage" },
{ q: "Strength does not come from physical capacity. It comes from an indomitable will.", a: "Mahatma Gandhi", t: "courage" },
{ q: "An eye for an eye only ends up making the whole world blind.", a: "Mahatma Gandhi", t: "courage" },
{ q: "The future depends on what we do in the present.", a: "Mahatma Gandhi", t: "courage" },
{ q: "Happiness is when what you think, what you say, and what you do are in harmony.", a: "Mahatma Gandhi", t: "courage" },
{ q: "A coward is incapable of exhibiting love; it is the prerogative of the brave.", a: "Mahatma Gandhi", t: "courage" },
{ q: "Live as if you were to die tomorrow. Learn as if you were to live forever.", a: "Mahatma Gandhi", t: "courage" },
{ q: "The weak can never forgive. Forgiveness is the attribute of the strong.", a: "Mahatma Gandhi", t: "courage" },
{ q: "In a gentle way, you can shake the world.", a: "Mahatma Gandhi", t: "courage" },

/* ?? PATIENCE ??????????????????????????????????????? 871–880 */
{ q: "Sit with the question. The answer will come.", a: "Crocus", t: "patience" },
{ q: "The seed is patient. The soil is patient. Be like them.", a: "Crocus", t: "patience" },
{ q: "All things come to those who wait with grace.", a: "Anonymous", t: "patience" },
{ q: "Do not confuse movement with progress.", a: "Anonymous", t: "patience" },
{ q: "Patience is what makes the wheat grow.", a: "Anonymous", t: "patience" },
{ q: "Some seasons are for planting. Others for waiting. Others for harvest.", a: "Crocus", t: "patience" },
{ q: "Give it time. It is almost always the right answer.", a: "Anonymous", t: "patience" },
{ q: "The flower that blooms in adversity is the rarest and most beautiful of all.", a: "Mulan", t: "patience" },
{ q: "You don't always need to know the why. Sometimes you just need to wait.", a: "Anonymous", t: "patience" },
{ q: "Patience is the quiet confidence that all is unfolding.", a: "Crocus", t: "patience" },

/* ?? WONDER ????????????????????????????????????????? 881–890 */
{ q: "The day will come when, after harnessing space, the winds, the tides, and gravitation, we shall harness for God the energies of love.", a: "Pierre Teilhard de Chardin", t: "wonder" },
{ q: "We are not human beings having a spiritual experience. We are spiritual beings having a human experience.", a: "Pierre Teilhard de Chardin", t: "wonder" },
{ q: "The most powerful weapon on earth is the human soul on fire.", a: "Ferdinand Foch", t: "wonder" },
{ q: "The most beautiful thing we can experience is the mysterious.", a: "Albert Einstein", t: "wonder" },
{ q: "Awe is the beginning of gratitude.", a: "Anonymous", t: "wonder" },
{ q: "The universe is full of magic things, patiently waiting for our senses to grow sharper.", a: "W.B. Yeats", t: "wonder" },
{ q: "He who can no longer pause to wonder and stand rapt in awe, is as good as dead.", a: "Albert Einstein", t: "wonder" },
{ q: "The world is full of wonder. We just have to look.", a: "Crocus", t: "wonder" },
{ q: "Every moment is a miracle if you look closely.", a: "Crocus", t: "wonder" },
{ q: "To wonder is to be alive.", a: "Anonymous", t: "wonder" },

/* ?? PRESENCE ??????????????????????????????????????? 891–900 */
{ q: "This is it. This is the moment. Live it.", a: "Anonymous", t: "presence" },
{ q: "Presence is not passive. It is the most active thing you can do.", a: "Crocus", t: "presence" },
{ q: "Come back to the breath. Come back to yourself.", a: "Crocus", t: "presence" },
{ q: "The now is where life happens.", a: "Anonymous", t: "presence" },
{ q: "You don't need to be anywhere else to be happy. You just need to be here.", a: "Crocus", t: "presence" },
{ q: "Being present is the greatest act of self-love.", a: "Anonymous", t: "presence" },
{ q: "You have arrived. This is the place.", a: "Crocus", t: "presence" },
{ q: "Everything you're looking for is already here.", a: "Anonymous", t: "presence" },
{ q: "The present moment is not small. It is infinite.", a: "Crocus", t: "presence" },
{ q: "Now is where you live. Now is where you bloom.", a: "Crocus", t: "presence" },
/* ============================================================
 *  BATCH 10 — quotes 901–1000  (final)
 * ============================================================ */

/* ?? FOCUS ????????????????????????????????????????? 901–910 */
{ q: "You do not rise to the level of your goals. You fall to the level of your systems.", a: "James Clear", t: "focus" },
{ q: "Every action you take is a vote for the type of person you wish to become.", a: "James Clear", t: "focus" },
{ q: "Habits are the compound interest of self-improvement.", a: "James Clear", t: "focus" },
{ q: "You should be far more concerned with your current trajectory than with your current results.", a: "James Clear", t: "focus" },
{ q: "Success is the product of daily habits — not once-in-a-lifetime transformations.", a: "James Clear", t: "focus" },
{ q: "The most effective way to change your habits is to focus not on what you want to achieve, but on who you wish to become.", a: "James Clear", t: "focus" },
{ q: "Be the designer of your world and not merely the consumer of it.", a: "James Clear", t: "focus" },
{ q: "Professionals stick to the schedule. Amateurs let life get in the way.", a: "James Clear", t: "focus" },
{ q: "The only way to become excellent is to be endlessly fascinated by doing the same thing over and over.", a: "James Clear", t: "focus" },
{ q: "If you only do the work when it's convenient or exciting, then you'll never be consistent enough to become great.", a: "James Clear", t: "focus" },

/* ?? CALM ?????????????????????????????????????????? 911–920 */
{ q: "The peace you are looking for is already inside of you.", a: "Crocus", t: "calm" },
{ q: "Stillness is the canvas on which everything else is painted.", a: "Ryan Holiday", t: "calm" },
{ q: "The more we value things outside our control, the less control we have.", a: "Epictetus", t: "calm" },
{ q: "It's not what happens to you, but how you react to it that matters.", a: "Epictetus", t: "calm" },
{ q: "Make the best use of what is in your power, and take the rest as it happens.", a: "Epictetus", t: "calm" },
{ q: "No man is free who is not master of himself.", a: "Epictetus", t: "calm" },
{ q: "First say to yourself what you would be; and then do what you have to do.", a: "Epictetus", t: "calm" },
{ q: "Wealth consists not in having great possessions, but in having few wants.", a: "Epictetus", t: "calm" },
{ q: "If you want to improve, be content to be thought foolish and stupid.", a: "Epictetus", t: "calm" },
{ q: "There is only one way to happiness and that is to cease worrying about things which are beyond the power of our will.", a: "Epictetus", t: "calm" },

/* ?? BEGIN ????????????????????????????????????????? 921–930 */
{ q: "Every day is a chance to start fresh.", a: "Crocus", t: "begin" },
{ q: "You don't have to have it all figured out. Begin anyway.", a: "Anonymous", t: "begin" },
{ q: "The path appears as you walk it.", a: "Crocus", t: "begin" },
{ q: "Today is the first day of the rest of your life.", a: "Charles Dederich", t: "begin" },
{ q: "Don't wait for the perfect moment. Take the moment and make it perfect.", a: "Anonymous", t: "begin" },
{ q: "Begin now, with what you have, where you are.", a: "Crocus", t: "begin" },
{ q: "A year from now, you'll wish you had started today.", a: "Karen Lamb", t: "begin" },
{ q: "Every great journey begins with a single, ordinary step.", a: "Anonymous", t: "begin" },
{ q: "You have to start to arrive.", a: "Crocus", t: "begin" },
{ q: "Even the longest story begins with a single word.", a: "Crocus", t: "begin" },

/* ?? PERSIST ???????????????????????????????????????? 931–940 */
{ q: "Atomic habits compound. Small daily efforts become massive results.", a: "James Clear", t: "persist" },
{ q: "Habits often appear to make no difference until you cross a critical threshold.", a: "James Clear", t: "persist" },
{ q: "The most powerful outcomes are delayed.", a: "James Clear", t: "persist" },
{ q: "Don't break the chain. Show up today.", a: "Jerry Seinfeld", t: "persist" },
{ q: "Success is the product of consistency, not intensity.", a: "Anonymous", t: "persist" },
{ q: "The work works on you while you work on it.", a: "Crocus", t: "persist" },
{ q: "Keep going. The best is yet to come.", a: "Anonymous", t: "persist" },
{ q: "You don't need to be extreme. You just need to be consistent.", a: "Anonymous", t: "persist" },
{ q: "Nothing great was ever built in a day.", a: "Crocus", t: "persist" },
{ q: "Every day you show up is a day you become stronger.", a: "Crocus", t: "persist" },

/* ?? REST ??????????????????????????????????????????? 941–950 */
{ q: "Your body is not a machine. Rest is required.", a: "Crocus", t: "rest" },
{ q: "Rest is productive. Rest is power.", a: "Anonymous", t: "rest" },
{ q: "The deepest rest comes from letting go completely.", a: "Anonymous", t: "rest" },
{ q: "Let the day end. Tomorrow begins fresh.", a: "Crocus", t: "rest" },
{ q: "You cannot think your way out of exhaustion. You can only rest your way out.", a: "Crocus", t: "rest" },
{ q: "Give your mind a place to be still.", a: "Crocus", t: "rest" },
{ q: "The world can wait. You need to rest.", a: "Anonymous", t: "rest" },
{ q: "Rest is not earned. It is needed.", a: "Crocus", t: "rest" },
{ q: "Even the deepest ocean is calm at the bottom.", a: "Anonymous", t: "rest" },
{ q: "Rest. Then return, stronger.", a: "Crocus", t: "rest" },

/* ?? REFLECT ???????????????????????????????????????? 951–960 */
{ q: "Life is really simple, but we insist on making it complicated.", a: "Confucius", t: "reflect" },
{ q: "By three methods we may learn wisdom: reflection, imitation, and experience.", a: "Confucius", t: "reflect" },
{ q: "The man who asks a question is a fool for a minute. The man who does not ask is a fool for life.", a: "Confucius", t: "reflect" },
{ q: "When you see a good person, think of becoming like them. When you see someone not so good, reflect on your own weak points.", a: "Confucius", t: "reflect" },
{ q: "Silence is a true friend who never betrays.", a: "Confucius", t: "reflect" },
{ q: "It is not the failure of others to appreciate your abilities that should trouble you, but rather your failure to appreciate theirs.", a: "Confucius", t: "reflect" },
{ q: "To be wronged is nothing unless you continue to remember it.", a: "Confucius", t: "reflect" },
{ q: "Our greatest glory is not in never falling, but in rising every time we fall.", a: "Confucius", t: "reflect" },
{ q: "Study the past if you would define the future.", a: "Confucius", t: "reflect" },
{ q: "The more man meditates upon good thoughts, the better will be his world and the world at large.", a: "Confucius", t: "reflect" },

/* ?? COURAGE ???????????????????????????????????????? 961–970 */
{ q: "The cave you fear to enter holds the treasure you seek.", a: "Anonymous", t: "courage" },
{ q: "Life begins at the end of your comfort zone.", a: "Neale Donald Walsch", t: "courage" },
{ q: "Nothing in life is to be feared, it is only to be understood.", a: "Marie Curie", t: "courage" },
{ q: "I was taught that the way of progress was neither swift nor easy.", a: "Marie Curie", t: "courage" },
{ q: "Be less curious about people and more curious about ideas.", a: "Marie Curie", t: "courage" },
{ q: "One never notices what has been done; one can only see what remains to be done.", a: "Marie Curie", t: "courage" },
{ q: "You cannot hope to build a better world without improving the individuals.", a: "Marie Curie", t: "courage" },
{ q: "We must have perseverance and above all confidence in ourselves.", a: "Marie Curie", t: "courage" },
{ q: "I am among those who think that science has great beauty.", a: "Marie Curie", t: "courage" },
{ q: "Be brave. Take risks. Nothing can substitute experience.", a: "Paulo Coelho", t: "courage" },

/* ?? PATIENCE ??????????????????????????????????????? 971–980 */
{ q: "Wait for the seed to grow. Do not dig it up to check.", a: "Crocus", t: "patience" },
{ q: "Everything is unfolding exactly as it should.", a: "Anonymous", t: "patience" },
{ q: "Trust the timing of your life. The right things come at the right time.", a: "Anonymous", t: "patience" },
{ q: "Slow and steady is not a cliché. It is a strategy.", a: "Crocus", t: "patience" },
{ q: "Give it time. Time is the great healer.", a: "Anonymous", t: "patience" },
{ q: "Be patient with yourself. You are a garden in progress.", a: "Crocus", t: "patience" },
{ q: "The roots grow first. The bloom comes later.", a: "Crocus", t: "patience" },
{ q: "Not all growth is visible.", a: "Crocus", t: "patience" },
{ q: "What is meant for you will not pass you by.", a: "Anonymous", t: "patience" },
{ q: "Wait well. Wait with hope.", a: "Crocus", t: "patience" },

/* ?? WONDER ????????????????????????????????????????? 981–990 */
{ q: "The world is full of ordinary magic if you look closely.", a: "Crocus", t: "wonder" },
{ q: "Wonder begins where certainty ends.", a: "Anonymous", t: "wonder" },
{ q: "The sky does not ask permission to be beautiful.", a: "Crocus", t: "wonder" },
{ q: "Every night the stars come out. Every morning the sun rises. It never gets old.", a: "Crocus", t: "wonder" },
{ q: "To be amazed is to be alive.", a: "Anonymous", t: "wonder" },
{ q: "There is no end to wonder in this world.", a: "Crocus", t: "wonder" },
{ q: "The smallest thing is as infinite as the largest.", a: "Crocus", t: "wonder" },
{ q: "Look up. Look around. Look within. Wonder is everywhere.", a: "Crocus", t: "wonder" },
{ q: "The world is a poem waiting to be read.", a: "Crocus", t: "wonder" },
{ q: "Everything is a miracle if you look at it long enough.", a: "Crocus", t: "wonder" },

/* ?? PRESENCE ??????????????????????????????????????? 991–1000 */
{ q: "You are here. You are alive. This moment is yours.", a: "Crocus", t: "presence" },
{ q: "The only way to live is to be present.", a: "Anonymous", t: "presence" },
{ q: "Come back to the breath. It will always bring you home.", a: "Crocus", t: "presence" },
{ q: "Nothing is missing. Everything is here.", a: "Crocus", t: "presence" },
{ q: "Be here. Be soft. Be present.", a: "Crocus", t: "presence" },
{ q: "You have everything you need, right now.", a: "Crocus", t: "presence" },
{ q: "The gift of life is being here to receive it.", a: "Crocus", t: "presence" },
{ q: "Wherever you are, that is exactly where you should be.", a: "Crocus", t: "presence" },
{ q: "This moment is complete. You are complete.", a: "Crocus", t: "presence" },
{ q: "Bloom where you are planted.", a: "Saint Francis de Sales", t: "presence" }



];


/* ============================================================
 *  HELPERS
 * ============================================================ */

(function () {
    const Q = window.focusQuotes;

    /* Shuffle-free random pick, optional tag filter.
       Avoids repeating the last 10 shown. */
    const recent = [];
    const RECENT_MAX = 10;

    window.getRandomQuote = function (tag) {
        let pool = tag ? Q.filter(x => x.t === tag) : Q;
        if (!pool.length) pool = Q;
        if (!pool.length) return null;

        let pick = null;
        for (let i = 0; i < 20; i++) {
            const c = pool[Math.floor(Math.random() * pool.length)];
            if (!recent.includes(c.q)) { pick = c; break; }
            pick = c;
        }

        recent.push(pick.q);
        if (recent.length > RECENT_MAX) recent.shift();
        return pick;
    };

    /* Deterministic by calendar day — same quote all day. */
    window.getDailyQuote = function () {
        const d = new Date();
        const seed = d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate();
        return Q[seed % Q.length];
    };

    /* Return N distinct quotes, optional tag filter. */
    window.getQuoteBatch = function (tag, n) {
        let pool = (tag ? Q.filter(x => x.t === tag) : Q).slice();
        if (!pool.length) pool = Q.slice();
        const out = [];
        n = Math.min(n || 1, pool.length);
        for (let i = 0; i < n; i++) {
            const idx = Math.floor(Math.random() * pool.length);
            out.push(pool.splice(idx, 1)[0]);
        }
        return out;
    };

    /* Fallback if file is empty. */
    if (!Q.length) {
        window.focusQuotes = [
            { q: "Focus on being productive instead of busy.", a: "Tim Ferriss", t: "focus" },
            { q: "The quieter you become, the more you can hear.", a: "Ram Dass", t: "calm" },
            { q: "Begin anywhere.", a: "John Cage", t: "begin" },
            { q: "This moment is your life.", a: "Crocus", t: "presence" }
        ];
    }
})();