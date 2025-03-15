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
      if (Math.random() > 0.6) { 
        setGlitchState({
          textShadow1: `${(Math.random() * 0.2).toFixed(3)}em ${(Math.random() * 0.2 - 0.1).toFixed(3)}em 0 rgba(255,0,255,.85)`,
          textShadow2: `${(Math.random() * 0.2 - 0.1).toFixed(3)}em ${(Math.random() * 0.2 - 0.1).toFixed(3)}em 0 rgba(0,255,255,.85)`,
          textShadow3: `${(Math.random() * 0.2 - 0.1).toFixed(3)}em ${(Math.random() * 0.2 - 0.1).toFixed(3)}em 0 rgba(255,255,255,.85)`,
          skew: `${Math.random() * 20 - 10}deg`,
          transform1: `${(Math.random() * 0.1 - 0.05).toFixed(3)}em`,
          transform2: `${(Math.random() * 0.1 - 0.05).toFixed(3)}em`,
          transform3: `${(Math.random() * 0.1 - 0.05).toFixed(3)}em`,
          transform4: `${(Math.random() * 0.1 - 0.05).toFixed(3)}em`,
        });
      }
    }, Math.random() * 200 + 50); 
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(glitchInterval);
    };
  }, []);

  const moveX = mousePosition.x * 30;
  const moveY = mousePosition.y * 30;
  const rotate = mousePosition.x * 8;

  return (
    <div className="h-screen flex flex-col items-center justify-center space-y-12">
      <div 
        className="logo-container relative"
        style={{
          transform: `translate(${moveX}px, ${moveY}px) rotate(${rotate}deg)`,
          transition: 'transform 0.2s ease-out',
        }}
      >
        <img 
          src="/output-onlinepngtools.png" 
          alt="CHRK Logo" 
          className="logo-image relative z-10"
          style={{
            maxWidth: '350px',
            filter: `drop-shadow(${glitchState.textShadow1}) drop-shadow(${glitchState.textShadow2}) drop-shadow(${glitchState.textShadow3})`,
            transform: `skew(${glitchState.skew})`,
          }}
        />
        <img 
          src="/output-onlinepngtools.png" 
          alt="" 
          className="absolute top-0 left-0 z-20"
          style={{
            maxWidth: '350px',
            clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)',
            transform: `translate(${glitchState.transform1}, ${glitchState.transform2})`,
            opacity: 0.75,
            filter: `drop-shadow(${glitchState.textShadow1}) drop-shadow(${glitchState.textShadow2}) drop-shadow(${glitchState.textShadow3})`,
          }}
        />
        <img 
          src="/output-onlinepngtools.png" 
          alt="" 
          className="absolute top-0 left-0 z-0"
          style={{
            maxWidth: '350px',
            clipPath: 'polygon(0 80%, 100% 20%, 100% 100%, 0 100%)',
            transform: `translate(${glitchState.transform3}, ${glitchState.transform4})`,
            opacity: 0.75,
            filter: `drop-shadow(${glitchState.textShadow1}) drop-shadow(${glitchState.textShadow2}) drop-shadow(${glitchState.textShadow3})`,
          }}
        />
      </div>

      <div className="flex flex-wrap justify-center gap-4 px-4">
        {[
          { text: "ｙｏｕｔｕｂｅ", url: "https://www.youtube.com/channel/UC6J3YgNuhigJaGhszNNoKTQ" },
          { text: "𝖎𝖔𝖆𝖙𝖆𝖌𝖗𝖆𝖒", url: "https://instagram.com/_xsun" },
          { text: "ꜱᴘᴏᴛɪꜰʏ", url: "https://open.spotify.com/user/1170935246" },
          { text: "x.ƈσɱ", url: "https://twitter.com/cchrkk" },
          { text: "ᒪᗩᔕᖶ.ᖴᗰ", url: "https://www.last.fm/user/cchrkk" }
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
          { text: "t͓̽w͓̽i͓̽t͓̽c͓̽h͓̽", url: "https://www.twitch.tv/ccherokee" },
          { text: "𝙗𝙡𝙪𝙚𝙨𝙠𝙮", url: "https://bsky.app/profile/chrk.tk" },
          { text: "steam", url: "https://steamcommunity.com/id/alexsk8" },
          { text: "ƓᏫƓ", url: "https://www.gog.com/u/ccherokee" },
          { text: "₴ØɄ₦Đ₵ⱠØɄĐ", url: "https://soundcloud.com/cccherokeee" }
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