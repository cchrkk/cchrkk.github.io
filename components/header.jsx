const { useState, useEffect } = window.React;

function Header() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [glitchState, setGlitchState] = useState({
    textShadow1: '0.05em 0 0 rgba(255,0,255,.75)',
    textShadow2: '-0.05em -0.025em 0 rgba(0,255,255,.75)',
    textShadow3: '-0.025em 0.05em 0 rgba(255,255,255,.75)',
    skew: '0deg',
    transform1: '-0.025em',
    transform2: '-0.0125em',
    transform3: '0.0125em',
    transform4: '0.025em',
  });
  
  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      const { innerWidth, innerHeight } = window;
      const x = (clientX / innerWidth) * 2 - 1;
      const y = (clientY / innerHeight) * 2 - 1;
      setMousePosition({ x, y });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    const glitchInterval = setInterval(() => {
      if (Math.random() > 0.7) { 
        setGlitchState({
          textShadow1: `${(Math.random() * 0.1).toFixed(3)}em ${(Math.random() * 0.1 - 0.05).toFixed(3)}em 0 rgba(255,0,255,.75)`,
          textShadow2: `${(Math.random() * 0.1 - 0.05).toFixed(3)}em ${(Math.random() * 0.1 - 0.05).toFixed(3)}em 0 rgba(0,255,255,.75)`,
          textShadow3: `${(Math.random() * 0.1 - 0.05).toFixed(3)}em ${(Math.random() * 0.1 - 0.05).toFixed(3)}em 0 rgba(255,255,255,.75)`,
          skew: `${Math.random() * 10 - 5}deg`,
          transform1: `${(Math.random() * 0.05 - 0.025).toFixed(3)}em`,
          transform2: `${(Math.random() * 0.05 - 0.025).toFixed(3)}em`,
          transform3: `${(Math.random() * 0.05 - 0.025).toFixed(3)}em`,
          transform4: `${(Math.random() * 0.05 - 0.025).toFixed(3)}em`,
        });
      }
    }, Math.random() * 300 + 100); 
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(glitchInterval);
    };
  }, []);

  const moveX = mousePosition.x * 20;
  const moveY = mousePosition.y * 20;
  const rotate = mousePosition.x * 5;

  const glitchStyle = {
    textShadow: `
      ${glitchState.textShadow1},
      ${glitchState.textShadow2},
      ${glitchState.textShadow3}
    `,
    transform: `skew(${glitchState.skew})`,
  };

  const glitchBeforeStyle = {
    clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)',
    transform: `translate(${glitchState.transform1}, ${glitchState.transform2})`,
    opacity: 0.75,
    textShadow: glitchStyle.textShadow,
  };

  const glitchAfterStyle = {
    clipPath: 'polygon(0 80%, 100% 20%, 100% 100%, 0 100%)',
    transform: `translate(${glitchState.transform3}, ${glitchState.transform4})`,
    opacity: 0.75,
    textShadow: glitchStyle.textShadow,
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center space-y-12">
      <h1 
        className="text-8xl md:text-9xl font-black tracking-tighter relative glitch"
        style={{
          transform: `translate(${moveX}px, ${moveY}px) rotate(${rotate}deg)`,
          transition: 'transform 0.2s ease-out',
          ...glitchStyle
        }}
        data-text="CHRK."
      >
        <span style={glitchBeforeStyle} className="absolute top-0 left-0 w-full h-full">CHRK.</span>
        CHRK.
        <span style={glitchAfterStyle} className="absolute top-0 left-0 w-full h-full">CHRK.</span>
      </h1>

      <div className="flex flex-wrap justify-center gap-4 px-4">
        {[
          { text: "ｙｏｕｔｕｂｅ", url: "https://www.youtube.com/channel/UC6J3YgNuhigJaGhszNNoKTQ" },
          { text: "𝖎𝖓𝖘𝖙𝖆𝖌𝖗𝖆𝖒", url: "https://instagram.com/_xsun" },
          { text: "ꜱᴘᴏᴛɪꜰʏ", url: "https://open.spotify.com/user/1170935246" },
          { text: "x.ƈσɱ", url: "https://twitter.com/cchrkk" },
          { text: "ᒪᗩᔕᖶ.ᖴᗰ", url: "https://www.last.fm/user/cchrkk" },
          { text: "steam", url: "https://steamcommunity.com/id/alexsk8" },
          { text: "ƓᏫƓ", url: "https://www.gog.com/u/ccherokee" },
          { text: "t͓̽w͓̽i͓̽t͓̽c͓̽h͓̽2", url: "https://www.twitch.tv/ccherokee" },
          { text: "t͓̽w͓̽i͓̽t͓̽c͓̽h͓̽", url: "https://www.twitch.tv/ccherokee" }
        ].map(social => (
          <a 
            key={social.url}
            href={social.url}
            className="social-text"
            target="_blank"
            rel="noopener noreferrer"
          >
            {social.text}
          </a>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-4 px-4">
        {[
          { text: "ｙｏｕｔｕｂｅ", url: "https://www.youtube.com/channel/UC6J3YgNuhigJaGhszNNoKTQ" },
          { text: "𝖎𝖓𝖘𝖙𝖆𝖌𝖗𝖆𝖒", url: "https://instagram.com/_xsun" },
          { text: "ꜱᴘᴏᴛɪꜰʏ", url: "https://open.spotify.com/user/1170935246" },
          { text: "x.ƈσɱ", url: "https://twitter.com/cchrkk" },
          { text: "ᒪᗩᔕᖶ.ᖴᗰ", url: "https://www.last.fm/user/cchrkk" },
          { text: "steam", url: "https://steamcommunity.com/id/alexsk8" },
          { text: "ƓᏫƓ", url: "https://www.gog.com/u/ccherokee" },
          { text: "t͓̽w͓̽i͓̽t͓̽c͓̽h͓̽2", url: "https://www.twitch.tv/ccherokee" },
          { text: "t͓̽w͓̽i͓̽t͓̽c͓̽h͓̽", url: "https://www.twitch.tv/ccherokee" }
        ].map(social => (
          <a 
            key={social.url}
            href={social.url}
            className="social-text"
            target="_blank"
            rel="noopener noreferrer"
          >
            {social.text}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Header;
window.Header = Header;
