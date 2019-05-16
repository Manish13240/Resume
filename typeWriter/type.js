    const typewriter = new Typewriter('#typewriter', {
      loop: true,
    });

    typewriter.typeString('Hi, I am Manish kumar!')
      .pauseFor(2500)
      .deleteAll()
      .typeString('I am Web Developer')
      .pauseFor(2500)
      .deleteChars(13)
      .typeString('<strong>Full Stack Web Developer!<strong>')
      .pauseFor(2500)
      .start();
