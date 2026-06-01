'use client';

import { useEffect, useRef, useState, useCallback } from 'react';

export default function Terminal() {
  const outputRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const [inputLineVisible, setInputLineVisible] = useState(false);
  const [input, setInput] = useState('');
  const historyRef = useRef<string[]>([]);
  const historyIdxRef = useRef(-1);
  const easterEggRef = useRef(false);

  const addLine = useCallback((html: string) => {
    if (!outputRef.current) return;
    const line = document.createElement('div');
    line.className = 'terminal-line';
    line.innerHTML = html;
    outputRef.current.appendChild(line);
  }, []);

  const commands: Record<string, () => void> = {
    help: () => {
      addLine('<span class="text-[#FFE600]">Available commands:</span>');
      addLine('  <span class="text-[#00FF66]">about</span>     <span class="text-[#00FF66]">skills</span>    <span class="text-[#00FF66]">projects</span>  <span class="text-[#00FF66]">contact</span>');
      addLine('  <span class="text-[#00FF66]">status</span>    <span class="text-[#00FF66]">uptime</span>    <span class="text-[#00FF66]">coffee</span>    <span class="text-[#00FF66]">fortune</span>');
      addLine('  <span class="text-[#00FF66]">whoami</span>    <span class="text-[#00FF66]">pwd</span>       <span class="text-[#00FF66]">ls</span>        <span class="text-[#00FF66]">date</span>');
      addLine('  <span class="text-[#00FF66]">neofetch</span>  <span class="text-[#00FF66]">history</span>   <span class="text-[#00FF66]">matrix</span>    <span class="text-[#00FF66]">secret</span>');
      addLine('  <span class="text-[#00FF66]">clear</span>     <span class="text-[#00FF66]">exit</span>      <span class="text-[#00FF66]">echo</span>     <span class="text-[#00FF66]">sudo</span>');
      addLine('  <span class="text-[#00FF66]">vim</span>       <span class="text-[#00FF66]">curl</span>      <span class="text-[#00FF66]">ping</span>      <span class="text-[#00FF66]">docker</span>');
      addLine('  <span class="text-[#00FF66]">git</span>       <span class="text-[#00FF66]">cal</span>       <span class="text-[#00FF66]">cowsay</span>    <span class="text-[#00FF66]">ssh</span>');
      addLine('  <span class="text-[#00FF66]">sl</span>        <span class="text-[#00FF66]">ip</span>        <span class="text-[#00FF66]">figlet</span>   <span class="text-[#00FF66]">skills-json</span>');
      easterEggRef.current = true;
    },
    about: () => {
      addLine('<span class="text-[#00FF66]">Fullstack developer</span>, 3+ years experience');
      addLine('PHP · Python · React · Next.js · TypeScript');
      addLine('<span class="text-[#FFE600]">🇺🇦 Ukraine</span> · Coffee-powered ☕');
    },
    skills: () => {
      addLine('<span class="text-[#3399FF]">Lang:</span> Python, Go, TypeScript, JavaScript, PHP, SQL, Rust');
      addLine('<span class="text-[#00FF66]">FE:</span> React, Next.js, Vue.js');
      addLine('<span class="text-[#FFE600]">BE:</span> Laravel, Symfony, FastAPI, Django');
      addLine('<span class="text-[#FF8800]">DB:</span> PostgreSQL, MySQL, Redis, MongoDB, Elasticsearch');
      addLine('<span class="text-[#FF3366]">DevOps:</span> Docker, K8s, AWS, GCP, Terraform, CI/CD');
    },
    'skills-json': () => {
      addLine('<span class="text-[#00FF66]">$ cat skills.json | jq</span>');
      addLine('<span class="text-text-dark/40">{</span>');
      addLine('  <span class="text-[#3399FF]">"languages"</span>: [');
      addLine('    <span class="text-[#FFE600]">"Python"</span>, <span class="text-[#FFE600]">"Go"</span>, <span class="text-[#FFE600]">"TypeScript"</span>,');
      addLine('    <span class="text-[#FFE600]">"JavaScript"</span>, <span class="text-[#FFE600]">"PHP"</span>, <span class="text-[#FFE600]">"SQL"</span>, <span class="text-[#FFE600]">"Rust"</span>');
      addLine('  ],');
      addLine('  <span class="text-[#00FF66]">"frameworks"</span>: [');
      addLine('    <span class="text-[#FFE600]">"FastAPI"</span>, <span class="text-[#FFE600]">"Django"</span>, <span class="text-[#FFE600]">"Laravel"</span>,');
      addLine('    <span class="text-[#FFE600]">"Symfony"</span>, <span class="text-[#FFE600]">"React"</span>, <span class="text-[#FFE600]">"Next.js"</span>, <span class="text-[#FFE600]">"Vue.js"</span>');
      addLine('  ],');
      addLine('  <span class="text-[#3399FF]">"databases"</span>: [');
      addLine('    <span class="text-[#FFE600]">"PostgreSQL"</span>, <span class="text-[#FFE600]">"MySQL"</span>, <span class="text-[#FFE600]">"Redis"</span>,');
      addLine('    <span class="text-[#FFE600]">"MongoDB"</span>, <span class="text-[#FFE600]">"Elasticsearch"</span>');
      addLine('  ],');
      addLine('  <span class="text-[#FF8800]">"infrastructure"</span>: [');
      addLine('    <span class="text-[#FFE600]">"Docker"</span>, <span class="text-[#FFE600]">"K8s"</span>, <span class="text-[#FFE600]">"AWS"</span>, <span class="text-[#FFE600]">"GCP"</span>, <span class="text-[#FFE600]">"Terraform"</span>, <span class="text-[#FFE600]">"CI/CD"</span>');
      addLine('  ]');
      addLine('<span class="text-text-dark/40">}</span>');
    },
    projects: () => {
      addLine('<span class="text-[#00FF66]">●</span> BLOG_PLATFORM        <span class="text-gray-400">[production]</span>');
      addLine('<span class="text-[#FFE600]">●</span> PIXEL_ART_CONVERTER   <span class="text-gray-400">[in_development]</span>');
      addLine('<span class="text-[#B026FF]">●</span> NEWS_PLATFORM        <span class="text-gray-400">[refactoring]</span>');
      addLine('<span class="text-[#00FF66]">●</span> ASCII_TERMINAL       <span class="text-gray-400">[production]</span>');
      addLine('<span class="text-[#FFE600]">●</span> KANBAN_BOARD         <span class="text-gray-400">[in_development]</span>');
      addLine('<span class="text-[#B026FF]">●</span> TERMINAL_QUEST       <span class="text-gray-400">[refactoring]</span>');
      addLine('<span class="text-[#00FF66]">●</span> BRUTAL_THOUGHTS      <span class="text-gray-400">[production]</span>');
      addLine('<span class="text-[#FFE600]">●</span> SMART_VCARD          <span class="text-gray-400">[in_development]</span>');
      addLine('<span class="text-[#B026FF]">●</span> RESUME_GENERATOR     <span class="text-gray-400">[refactoring]</span>');
      addLine('<span class="text-[#00FF66]">●</span> TAROT_CARD_DAILY     <span class="text-gray-400">[production]</span>');
      addLine('<span class="text-[#FFE600]">●</span> CORE_FRAMEWORK       <span class="text-gray-400">[in_progress]</span>');
      addLine('<span class="text-[#FFE600]">●</span> SAAS_PLATFORM        <span class="text-gray-400">[in_progress]</span>');
    },
    contact: () => {
      addLine('<span class="text-[#3399FF]">GitHub:</span> github.com/an4rky1');
      addLine('<span class="text-[#3399FF]">TG:</span> t.me/an4rky1');
      addLine('<span class="text-[#3399FF]">Email:</span> roman.ivanov@email.com');
    },
    status: () => {
      const states = [
        { text: 'available_for_hire', color: '#00FF66' },
        { text: 'drinking_coffee', color: '#FFE600' },
        { text: 'coding', color: '#3399FF' },
        { text: 'debugging', color: '#FF3366' },
      ];
      const s = states[Math.floor(Math.random() * states.length)];
      addLine(`status: <span style="color:${s.color}" class="font-bold">${s.text}</span>`);
      addLine('mood: caffeinated ☕');
    },
    uptime: () => {
      addLine('3+ years · 10+ projects · 5,000+ commits');
      addLine('~3,285 cups of coffee · ∞ bugs squashed');
    },
    whoami: () => addLine('roman'),
    pwd: () => addLine('/home/roman/portfolio'),
    ls: () => addLine('<span class="text-[#3399FF]">about.txt</span>  <span class="text-[#00FF66]">skills.json</span>  <span class="text-[#FFE600]">projects/</span>  <span class="text-gray-400">.secret</span>'),
    date: () => addLine(new Date().toLocaleString('en-US', { dateStyle: 'full', timeStyle: 'medium' })),
    coffee: () => addLine(['☕ Espresso! +10 energy', '☕ Latte! +20 mood', '☕ Double espresso! +30 speed'][Math.floor(Math.random() * 3)]),
    matrix: () => {
      const chars = 'アイウエオカキクケコ01';
      addLine('<span class="text-[#00FF66]">Enter the Matrix...</span>');
      for (let i = 0; i < 3; i++) {
        let row = '';
        for (let j = 0; j < 35; j++)
          row += `<span class="matrix-char" style="color:#00FF66;animation-delay:${Math.random() * 2}s;opacity:${0.3 + Math.random() * 0.7}">${chars[Math.floor(Math.random() * chars.length)]}</span>`;
        addLine(row);
      }
    },
    fortune: () => addLine(`<span class="text-[#FFE600]">🔮</span> ${['You will find a bug within a week. 🐛', 'Code will compile without errors. ✨', 'PR approved without comments. 🎉', 'Friday deploy without incidents. 🚀', 'Regex will work on the first try. 🔮'][Math.floor(Math.random() * 5)]}`),
    neofetch: () => {
      addLine('<span class="text-[#00FF66] font-bold">roman</span><span class="text-gray-400">@</span><span class="text-[#00FF66] font-bold">archlinux</span>');
      addLine('<span class="text-gray-400">─────────────────────</span>');
      addLine('<span class="nf-k">OS</span><span class="nf-s">:</span> Arch Linux x86_64');
      addLine('<span class="nf-k">Editor</span><span class="nf-s">:</span> <span class="text-[#FFE600]">Neovim</span>');
      addLine('<span class="nf-k">CPU</span><span class="nf-s">:</span> AMD Ryzen 9 7950X');
    },
    history: () => {
      if (historyRef.current.length === 0) addLine('<span class="text-gray-400">(empty)</span>');
      else historyRef.current.forEach((cmd, i) => addLine(`  <span class="text-gray-400">${i + 1}</span>  ${cmd}`));
    },
    secret: () => {
      addLine('<span class="text-[#B026FF]">╔════════════════════════╗</span>');
      addLine('<span class="text-[#B026FF]">║</span>  🎉 <span class="text-[#00FF66]" style="font-weight:bold">EASTER EGG!</span>     <span class="text-[#B026FF]">║</span>');
      addLine('<span class="text-[#B026FF]">║</span>  Have a cookie 🍪    <span class="text-[#B026FF]">║</span>');
      addLine('<span class="text-[#B026FF]">╚════════════════════════╝</span>');
    },
    sudo: () => addLine('<span class="text-[#FF3366]">roman</span> is not in the sudoers file. This incident will be reported.'),
    vim: () => {
      addLine('<span class="text-[#00FF66]">VIM — the editor you can never exit.</span>');
      const tips = [':q — quit', ':wq — save and quit', ':q! — force quit', 'ESC + :q — classic', 'Close the terminal 🤡'];
      addLine(`  <span class="text-[#FFE600]">${tips[Math.floor(Math.random() * tips.length)]}</span>`);
    },
    curl: () => {
      addLine('<span class="text-gray-400">  % Total    % Received % Xferd</span>');
      addLine('<span class="text-gray-400">  100   142  100   142    0     0  99999      0 --:--:-- --:--:-- --:--:--  99999</span>');
      addLine('<span class="text-[#00FF66]">{</span>');
      addLine('  <span class="text-[#3399FF]">"status"</span>: <span class="text-[#FFE600]">"ok"</span>,');
      addLine('  <span class="text-[#3399FF]">"message"</span>: <span class="text-[#FFE600]">"Hello from portfolio API"</span>,');
      addLine('  <span class="text-[#3399FF]">"coffee_level"</span>: <span class="text-[#FF3366]">42</span>');
      addLine('<span class="text-[#00FF66]">}</span>');
    },
    ping: () => {
      addLine('<span class="text-[#00FF66]">PING</span> google.com (142.250.185.78): 56 data bytes');
      addLine('  64 bytes: icmp_seq=0 ttl=118 time=12.3ms');
      addLine('  64 bytes: icmp_seq=1 ttl=118 time=11.8ms');
      addLine('  64 bytes: icmp_seq=2 ttl=118 time=13.1ms');
      addLine('  64 bytes: icmp_seq=3 ttl=118 time=10.9ms');
      addLine('<span class="text-gray-400">  --- google.com ping statistics ---</span>');
      addLine('  4 packets transmitted, 4 received, <span class="text-[#00FF66]">0% packet loss</span>');
    },
    docker: () => {
      addLine('<span class="text-[#3399FF]">CONTAINER ID</span>   <span class="text-[#00FF66]">IMAGE</span>          <span class="text-[#FFE600]">STATUS</span>        <span class="text-[#FF3366]">NAMES</span>');
      addLine('  a1b2c3d4e5f6   portfolio:v1    Up 24h         portfolio_web');
      addLine('  f6e5d4c3b2a1   postgres:16     Up 24h         portfolio_db');
      addLine('  e5f6a1b2c3d4   redis:7-alpine  Up 24h         portfolio_cache');
    },
    git: () => {
      addLine('<span class="text-[#00FF66]">On branch</span> main');
      addLine('Your branch is up to date with \'origin/main\'.');
      addLine('');
      addLine('  <span class="text-[#FFE600]">Changes not staged:</span>');
      addLine('    <span class="text-[#FF3366]">modified:</span>   src/terminal.tsx');
      addLine('    <span class="text-[#FF3366]">modified:</span>   src/style.css');
      addLine('');
      addLine('<span class="text-gray-400">  no changes added to commit</span>');
    },
    cal: () => {
      const now = new Date();
      const year = now.getFullYear();
      const month = now.toLocaleString('en-US', { month: 'long' });
      const firstDay = new Date(year, now.getMonth(), 1).getDay();
      const daysInMonth = new Date(year, now.getMonth() + 1, 0).getDate();
      const offset = firstDay === 0 ? 6 : firstDay - 1;
      addLine(`      <span class="text-[#FFE600]">${month} ${year}</span>`);
      addLine('  Mo Tu We Th Fr Sa Su');
      let row = '   ';
      for (let i = 0; i < offset; i++) row += '   ';
      for (let d = 1; d <= daysInMonth; d++) {
        const isToday = d === now.getDate();
        row += (isToday ? `<span class="text-[#00FF66] font-bold">${d.toString().padStart(2)}</span>` : `${d.toString().padStart(2)}`) + ' ';
        if ((offset + d) % 7 === 0 && d < daysInMonth) { addLine(row); row = '   '; }
      }
      if (row.trim()) addLine(row);
    },
    cowsay: () => {
      const msgs = ['Moo! Keep coding! 🐄', 'Have you tried turning it off and on?', 'The answer is 42.', 'git push --force — always a good idea 🤠'];
      const msg = msgs[Math.floor(Math.random() * msgs.length)];
      const border = '─'.repeat(msg.length + 2);
      addLine(` <span class="text-[#FFE600]">┌${border}┐</span>`);
      addLine(` <span class="text-[#FFE600]">│</span> ${msg} <span class="text-[#FFE600]">│</span>`);
      addLine(` <span class="text-[#FFE600]">└${border}┘</span>`);
      addLine('  <span class="text-[#00FF66]">\\   ^__^</span>');
      addLine('   <span class="text-[#00FF66]">\\  (oo)\\_______</span>');
      addLine('      (__)\\       )\\/\\');
      addLine('          ||----w |');
      addLine('          ||     ||');
    },
    ssh: () => {
      addLine('<span class="text-[#00FF66]">SSH connection established</span>');
      addLine('  <span class="nf-k">Host</span><span class="nf-s">:</span> portfolio.server');
      addLine('  <span class="nf-k">User</span><span class="nf-s">:</span> roman');
      addLine('  <span class="nf-k">Port</span><span class="nf-s">:</span> 22');
      addLine('  <span class="nf-k">Cipher</span><span class="nf-s">:</span> chacha20-poly1305@openssh.com');
      addLine('  <span class="nf-k">Status</span><span class="nf-s">:</span> <span class="text-[#00FF66]">connected</span>');
    },
    sl: () => {
      addLine('<span class="text-[#FF3366]">Dude, you typed sl instead of ls?</span>');
      addLine('');
      addLine('      <span class="text-[#FFE600]">CHOO CHOO! 🚂</span>');
      addLine('      <span class="text-gray-400">||</span>');
      addLine('  <span class="text-gray-400">___||____________</span>');
      addLine(' <span class="text-gray-400">|__|__|__|__|__|__|___</span>');
      addLine(' <span class="text-gray-400">|  Steam  Locomotive |</span>');
      addLine(' <span class="text-gray-400">|____________________|</span>');
      addLine('  <span class="text-gray-400">|__|__|__|__|__|__|</span>');
      addLine('     <span class="text-gray-400">||||</span>     <span class="text-gray-400">||||</span>');
    },
    ip: () => {
      const interfaces = [
        { name: 'lo', ip: '127.0.0.1', mac: '00:00:00:00:00:00', status: 'UP' },
        { name: 'eth0', ip: '10.0.0.42', mac: 'de:ad:be:ef:00:42', status: '<span class="text-[#00FF66]">UP</span>' },
        { name: 'wlan0', ip: '192.168.1.42', mac: 'ca:fe:ba:be:c0:de', status: '<span class="text-[#00FF66]">UP</span>' },
        { name: 'docker0', ip: '172.17.0.1', mac: '02:42:ac:11:00:01', status: '<span class="text-[#00FF66]">UP</span>' },
      ];
      interfaces.forEach(iface => {
        addLine(`<span class="text-[#3399FF]">${iface.name}</span>: flags=4163  mtu 1500`);
        addLine(`        inet ${iface.ip}  netmask 255.255.255.0`);
        addLine(`        ether ${iface.mac}`);
        addLine(`        status: ${iface.status}`);
      });
    },
    figlet: () => { commands.figlet = (() => {}) as any; addLine('Usage: <span class="text-[#FFE600]">figlet &lt;text&gt;</span>'); },
    clear: () => { if (outputRef.current) outputRef.current.innerHTML = ''; },
    exit: () => {
      addLine('<span class="text-[#FF3366]">logout. Connection closed.</span>');
      setActive(false);
      setInputLineVisible(false);
    },
  };

  useEffect(() => {
    const lines = [
      { html: '<span class="text-[#00FF66] font-bold">roman</span><span class="text-gray-400">@</span><span class="text-[#00FF66] font-bold">archlinux</span>', delay: 30 },
      { html: '<span class="text-gray-400">──────────────────────────────</span>', delay: 30 },
      { html: '<span class="nf-k">OS</span><span class="nf-s">:</span> Arch Linux x86_64', delay: 30 },
      { html: '<span class="nf-k">Host</span><span class="nf-s">:</span> roman portfolio', delay: 30 },
      { html: '<span class="nf-k">Kernel</span><span class="nf-s">:</span> 6.12.0-arch1-1', delay: 30 },
      { html: '<span class="nf-k">Uptime</span><span class="nf-s">:</span> <span class="text-[#FFE600]">24/7</span>', delay: 30 },
      { html: '<span class="nf-k">Shell</span><span class="nf-s">:</span> zsh 5.9', delay: 30 },
      { html: '<span class="nf-k">Editor</span><span class="nf-s">:</span> <span class="text-[#FFE600]">Neovim</span> / VS Code', delay: 30 },
      { html: '<span class="nf-k">CPU</span><span class="nf-s">:</span> AMD Ryzen 9 7950X', delay: 30 },
      { html: '<span class="nf-k">GPU</span><span class="nf-s">:</span> NVIDIA RTX 4090', delay: 30 },
      { html: '<span class="nf-k">Memory</span><span class="nf-s">:</span> 32456MiB / 65432MiB', delay: 30 },
      { html: '<span class="nf-k">Coffee</span><span class="nf-s">:</span> <span class="text-[#FF3366]">∞</span> ☕', delay: 30 },
      { html: '', delay: 0 },
      { html: '<div class="flex gap-[2px] flex-wrap">' + ['#FF3366','#FFE600','#00FF66','#3399FF','#B026FF','#00FFFF','#FF8800','#888888','#FF3366','#FFE600','#00FF66','#3399FF','#B026FF','#00FFFF','#FF8800','#888888'].map(c => `<span class="w-5 h-[3px]" style="background:${c}"></span>`).join('') + '</div>', delay: 30 },
      { html: '', delay: 0 },
      { html: '<span class="text-[#00FF66]">✓ Ready in</span> <span class="text-[#FFE600]">142ms</span>  ·  http://localhost:3000', delay: 30 },
    ];

    let cancelled = false;
    (async () => {
      for (const l of lines) {
        if (cancelled) break;
        addLine(l.html);
        await new Promise(r => setTimeout(r, l.delay));
      }
      await new Promise(r => setTimeout(r, 300));
      if (!cancelled) setInputLineVisible(true);
    })();
    return () => { cancelled = true; };
  }, [addLine]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!active || !inputLineVisible) return;

    if (e.key === 'Backspace') {
      e.preventDefault();
      setInput(prev => prev.slice(0, -1));
      return;
    }

    if (e.key === 'Enter') {
      e.preventDefault();
      const raw = input.trim();
      const cmd = raw.toLowerCase();
      if (raw) {
        historyRef.current.push(raw);
        historyIdxRef.current = historyRef.current.length;
      }
      addLine(`<span class="text-acid-green">❯</span> <span class="text-gray-300">${input}</span>`);

      if (cmd.startsWith('echo ')) {
        addLine(`<span class="text-gray-300">${raw.slice(5)}</span>`);
      } else if (cmd.startsWith('figlet ')) {
        const text = raw.slice(7).trim().toUpperCase() || 'hello';
        const big = text.split('').map(c => c + ' ').join('');
        addLine('<span class="text-[#00FF66]">' + '╔══════════════════╗' + '</span>');
        addLine('<span class="text-[#00FF66]">║</span>   ' + big + '   <span class="text-[#00FF66]">║</span>');
        addLine('<span class="text-[#00FF66]">╚══════════════════╝</span>');
      } else if (cmd.startsWith('sudo ') || cmd.startsWith('sudo\t')) {
        addLine(`<span class="text-[#FF3366]">roman</span> is not in the sudoers file. This incident will be reported.`);
      } else if (commands[cmd]) {
        commands[cmd]();
      } else if (cmd !== '') {
        addLine(`<span class="text-[#FF3366]">zsh: command not found: ${cmd}</span>`);
        if (!easterEggRef.current)
          addLine('<span class="text-gray-400 text-xs">Hint: <span class="text-[#FFE600]">help</span></span>');
      }

      setInput('');
      return;
    }

    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIdxRef.current > 0) {
        historyIdxRef.current--;
        setInput(historyRef.current[historyIdxRef.current]);
      }
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIdxRef.current < historyRef.current.length - 1) {
        historyIdxRef.current++;
        setInput(historyRef.current[historyIdxRef.current]);
      } else {
        historyIdxRef.current = historyRef.current.length;
        setInput('');
      }
      return;
    }

    if (e.key.length === 1 && !e.ctrlKey && !e.altKey && !e.metaKey) {
      e.preventDefault();
      setInput(prev => prev + e.key);
    }
  };

  return (
    <div
      className="w-full h-full flex flex-col"
      tabIndex={0}
      onFocus={() => setActive(true)}
      onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setActive(false); }}
      onKeyDown={handleKeyDown}
    >
      <div className="border-4 border-text-dark shadow-neo-lg overflow-hidden bg-terminal-bg flex flex-col flex-1">
        <div className="flex items-center justify-between px-4 py-2 bg-[#2d2d2d] border-b border-gray-600 shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]"></div>
            <div className="w-3 h-3 rounded-full bg-[#febc2e]"></div>
            <div className="w-3 h-3 rounded-full bg-[#28c840]"></div>
          </div>
          <span className="text-gray-400 text-[10px] sm:text-xs">~/roman — zsh</span>
        </div>
        <div
          className="p-3 sm:p-4 cursor-text select-text flex-1 overflow-y-auto text-gray-300"
          style={{ minHeight: '20rem', maxHeight: '26rem' }}
          onClick={() => setActive(true)}
        >
          <div ref={outputRef} className="text-[11px] sm:text-xs leading-snug"></div>
          {inputLineVisible && (
            <div className="mt-1 pt-1 border-t border-gray-600/50 text-[11px] sm:text-xs text-gray-300">
              <span className="text-acid-green">❯</span>
              <span className="ml-1">{input}</span>
              <span className="cursor-blink text-acid-green">█</span>
            </div>
          )}
        </div>
      </div>
      <p className="text-[10px] text-gray-400 mt-2 text-center shrink-0">
        <i className="fas fa-keyboard mr-1"></i>type `help` for available commands
      </p>
    </div>
  );
}
