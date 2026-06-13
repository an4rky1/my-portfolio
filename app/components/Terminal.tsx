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
      addLine('<span class="text-[#FFE600]">Available commands (type any to run):</span>');
      addLine('');
      addLine('  <span class="text-[#00FF66]">cat about.txt</span>     View about me');
      addLine('  <span class="text-[#00FF66]">cat skills.json</span>   View tech stack');
      addLine('  <span class="text-[#00FF66]">ls projects/</span>      List projects');
      addLine('  <span class="text-[#00FF66]">cat contact</span>       Contact info');
      addLine('');
      addLine('  <span class="text-[#00FF66]">whoami</span>     <span class="text-[#00FF66]">pwd</span>        <span class="text-[#00FF66]">date</span>');
      addLine('  <span class="text-[#00FF66]">uptime</span>     <span class="text-[#00FF66]">neofetch</span>   <span class="text-[#00FF66]">cal</span>');
      addLine('  <span class="text-[#00FF66]">df -h</span>      <span class="text-[#00FF66]">ps aux</span>     <span class="text-[#00FF66]">tree</span>');
      addLine('  <span class="text-[#00FF66]">curl</span>       <span class="text-[#00FF66]">ping</span>        <span class="text-[#00FF66]">dig</span>');
      addLine('  <span class="text-[#00FF66]">ssh</span>        <span class="text-[#00FF66]">docker ps</span>  <span class="text-[#00FF66]">git status</span>');
      addLine('  <span class="text-[#00FF66]">ip a</span>       <span class="text-[#00FF66]">vim</span>         <span class="text-[#00FF66]">figlet</span>');
      addLine('  <span class="text-[#00FF66]">echo</span>       <span class="text-[#00FF66]">history</span>    <span class="text-[#00FF66]">clear</span>');
      addLine('  <span class="text-[#00FF66]">exit</span>       <span class="text-[#00FF66]">matrix</span>     <span class="text-[#00FF66]">sudo !!</span>');
    },
    'cat about.txt': () => {
      addLine('<span class="text-gray-400"># about.txt — roman_ivanov</span>');
      addLine('');
      addLine('  Name:        roman_ivanov');
      addLine('  Role:        Fullstack Developer');
      addLine('  Experience:  3+ years');
      addLine('  Location:    Ukraine, Remote');
      addLine('  Languages:   Ukrainian, Russian, English (B2)');
      addLine('');
      addLine('  Backend with PHP, TypeScript, Python.');
      addLine('  Frontend with React, Next.js, Vue.js.');
      addLine('  Currently learning Go.');
    },
    'cat skills.json': () => {
      addLine('<span class="text-text-dark/40">{</span>');
      addLine('  <span class="text-[#3399FF]">"languages"</span>: [<span class="text-[#FFE600]">"Python"</span>, <span class="text-[#FFE600]">"Go"</span>, <span class="text-[#FFE600]">"TypeScript"</span>, <span class="text-[#FFE600]">"PHP"</span>, <span class="text-[#FFE600]">"SQL"</span>],');
      addLine('  <span class="text-[#00FF66]">"frameworks"</span>: [<span class="text-[#FFE600]">"React"</span>, <span class="text-[#FFE600]">"Next.js"</span>, <span class="text-[#FFE600]">"Laravel"</span>, <span class="text-[#FFE600]">"Symfony"</span>, <span class="text-[#FFE600]">"NestJS"</span>],');
      addLine('  <span class="text-[#3399FF]">"databases"</span>: [<span class="text-[#FFE600]">"PostgreSQL"</span>, <span class="text-[#FFE600]">"Redis"</span>, <span class="text-[#FFE600]">"MongoDB"</span>, <span class="text-[#FFE600]">"Elasticsearch"</span>],');
      addLine('  <span class="text-[#FF8800]">"infrastructure"</span>: [<span class="text-[#FFE600]">"Docker"</span>, <span class="text-[#FFE600]">"K8s"</span>, <span class="text-[#FFE600]">"AWS"</span>, <span class="text-[#FFE600]">"Terraform"</span>, <span class="text-[#FFE600]">"CI/CD"</span>]');
      addLine('<span class="text-text-dark/40">}</span>');
    },
    'ls projects/': () => {
      addLine('total 12');
      addLine('<span class="text-[#00FF66]">drwxr-xr-x</span>  <span class="text-[#FFE600]">2</span> roman roman  <span class="text-[#3399FF]">4096</span> Jun  2 12:00 <span class="text-[#00FF66]">.</span>');
      addLine('<span class="text-[#00FF66]">drwxr-xr-x</span>  <span class="text-[#FFE600]">2</span> roman roman  <span class="text-[#3399FF]">4096</span> Jun  2 12:00 <span class="text-[#00FF66]">..</span>');
      addLine('<span class="text-[#00FF66]">-rw-r--r--</span>  <span class="text-[#FFE600]">1</span> roman roman  <span class="text-[#3399FF]">142</span> Jan 15 09:30 <span class="text-[#00FF66]">BLOG_PLATFORM</span>');
      addLine('<span class="text-[#00FF66]">-rw-r--r--</span>  <span class="text-[#FFE600]">1</span> roman roman  <span class="text-[#3399FF]">142</span> Feb 20 14:15 <span class="text-[#FFE600]">PIXEL_ART_CONVERTER</span>');
      addLine('<span class="text-[#00FF66]">-rw-r--r--</span>  <span class="text-[#FFE600]">1</span> roman roman  <span class="text-[#3399FF]">142</span> Mar 10 11:00 <span class="text-[#B026FF]">NEWS_PLATFORM</span>');
      addLine('<span class="text-[#00FF66]">-rw-r--r--</span>  <span class="text-[#FFE600]">1</span> roman roman  <span class="text-[#3399FF]">142</span> Apr  5 16:45 <span class="text-[#00FF66]">ASCII_TERMINAL</span>');
      addLine('<span class="text-[#00FF66]">-rw-r--r--</span>  <span class="text-[#FFE600]">1</span> roman roman  <span class="text-[#3399FF]">142</span> May 12 08:30 <span class="text-[#FFE600]">KANBAN_BOARD</span>');
      addLine('  ... and 7 more');
    },
    'cat contact': () => {
      addLine('<span class="text-[#3399FF]">GitHub:</span>    github.com/an4rky1');
      addLine('<span class="text-[#3399FF]">Telegram:</span>  t.me/an4rky1');
      addLine('<span class="text-[#3399FF]">LinkedIn:</span>  linkedin.com/in/an4rky1');
      addLine('<span class="text-[#3399FF]">Email:</span>     anarky13@proton.me');
      addLine('<span class="text-[#3399FF]">Location:</span>  Ukraine, Remote');
    },
    status: () => {
      const states = [
        { text: 'available_for_hire', color: '#00FF66' },
        { text: 'working', color: '#FFE600' },
        { text: 'coding', color: '#3399FF' },
        { text: 'debugging', color: '#FF3366' },
      ];
      const s = states[Math.floor(Math.random() * states.length)];
      addLine('<span class="text-gray-400">●</span> Status: <span style="color:' + s.color + '" class="font-bold">' + s.text + '</span>');
      addLine('<span class="text-gray-400">●</span> Mood:  caffeinated');
      addLine('<span class="text-gray-400">●</span> Uptime: 3+ years in dev');
    },
    uptime: () => {
      const h = Math.floor(Math.random() * 24);
      const m = Math.floor(Math.random() * 60);
      const users = Math.floor(Math.random() * 3) + 1;
      addLine(' 12:34:56 up ' + h + ' days, ' + m + ' min,  ' + users + ' user,  load average: 0.42, 0.35, 0.28');
      addLine('Active: 3+ years coding · 12 projects · ∞ cups of coffee');
    },
    whoami: () => addLine('roman'),
    pwd: () => addLine('/home/roman/portfolio'),
    ls: () => addLine('<span class="text-[#3399FF]">about.txt</span>  <span class="text-[#00FF66]">skills.json</span>  <span class="text-[#FFE600]">projects/</span>  <span class="text-[#B026FF]">contact</span>  <span class="text-gray-400">.secret</span>'),
    date: () => addLine(new Date().toString()),
    'df -h': () => {
      addLine('<span class="text-[#3399FF]">Filesystem</span>      <span class="text-[#00FF66]">Size</span>  <span class="text-[#FFE600]">Used</span>  <span class="text-[#FF3366]">Avail</span>  <span class="text-gray-400">Use%  Mounted on</span>');
      addLine('dev/sda1          120G   42G   78G   <span class="text-[#00FF66]">35%</span>  /');
      addLine('dev/sda2          500G  234G  266G  <span class="text-[#FFE600]">47%</span>  /home');
      addLine('dev/sdb1            1T  512G  512G  <span class="text-[#FF3366]">50%</span>  /mnt/storage');
      addLine('tmpfs              16G  2.3G   14G   <span class="text-[#00FF66]">14%</span>  /tmp');
    },
    'ps aux': () => {
      addLine('<span class="text-[#3399FF]">USER</span>       <span class="text-[#00FF66]">PID</span>  <span class="text-[#FFE600]">%CPU</span>  <span class="text-[#FF3366]">%MEM</span>  <span class="text-gray-400">VSZ    RSS    TTY   STAT  START  TIME  COMMAND</span>');
      addLine('roman       <span class="text-[#FF3366]">1</span>   0.0   0.1  12345  1234  pts/0  Ss    09:00  0:02  init');
      addLine('roman      <span class="text-[#FF3366]">42</span>   2.3   4.2  54321  4321  pts/0  S+    09:01  0:15  <span class="text-[#FFE600]">nvim</span>');
      addLine('roman      <span class="text-[#FF3366]">56</span>   1.5   3.8  98765  5432  pts/0  Sl+   09:05  0:03  <span class="text-[#00FF66]">node</span>');
      addLine('roman      <span class="text-[#FF3366]">99</span>   0.2   0.5   8765   987  pts/0  S+    09:10  0:01  docker');
      addLine('roman     <span class="text-[#FF3366]">128</span>   0.0   0.2  23456   567  pts/1  Ss    09:00  0:42  <span class="text-[#00FF66]">zsh</span>');
      addLine('roman     <span class="text-[#FF3366]">256</span>   0.0   0.0      0     0  ?      Z     09:15  0:00  <span class="text-gray-400">[zombie]</span>');
    },
    neofetch: () => {
      addLine('<span class="text-[#00FF66] font-bold">roman</span><span class="text-gray-400">@</span><span class="text-[#00FF66] font-bold">archlinux</span>');
      addLine('<span class="text-gray-400">--------------------------</span>');
      addLine('<span class="nf-k">OS</span><span class="nf-s">:</span> Arch Linux x86_64');
      addLine('<span class="nf-k">Kernel</span><span class="nf-s">:</span> 6.12.0-arch1-1');
      addLine('<span class="nf-k">Uptime</span><span class="nf-s">:</span> 24 days, 12 hours');
      addLine('<span class="nf-k">Shell</span><span class="nf-s">:</span> zsh 5.9');
      addLine('<span class="nf-k">Editor</span><span class="nf-s">:</span> Neovim 0.10');
      addLine('<span class="nf-k">CPU</span><span class="nf-s">:</span> AMD Ryzen 9 7950X (16 cores)');
      addLine('<span class="nf-k">GPU</span><span class="nf-s">:</span> NVIDIA RTX 4090');
      addLine('<span class="nf-k">Memory</span><span class="nf-s">:</span> 32456MiB / 65432MiB');
    },
    matrix: () => {
      const chars = 'アイウエオカキクケコ01';
      addLine('<span class="text-[#00FF66]">Entering matrix mode...</span>');
      for (let i = 0; i < 3; i++) {
        let row = '';
        for (let j = 0; j < 35; j++)
          row += `<span class="matrix-char" style="color:#00FF66;animation-delay:${Math.random() * 2}s;opacity:${0.3 + Math.random() * 0.7}">${chars[Math.floor(Math.random() * chars.length)]}</span>`;
        addLine(row);
      }
    },
    dig: () => {
      addLine('<span class="text-gray-400">; &lt;&lt;&gt;&gt; DiG 9.18 &lt;&lt;&gt;&gt; github.com A</span>');
      addLine('<span class="text-gray-400">;; -&gt;&gt;HEADER&lt;&lt;- opcode: QUERY, status: NOERROR</span>');
      addLine('');
      addLine('<span class="text-gray-400">;; ANSWER SECTION:</span>');
      addLine('github.com.         <span class="text-[#FFE600]">60</span>    IN  A       <span class="text-[#00FF66]">140.82.121.3</span>');
      addLine('github.com.         <span class="text-[#FFE600]">60</span>    IN  A       <span class="text-[#00FF66]">140.82.121.4</span>');
      addLine('');
      addLine('<span class="text-gray-400">;; Query time: 12 msec</span>');
      addLine('<span class="text-gray-400">;; SERVER: 1.1.1.1#53(cloudflare)</span>');
    },
    history: () => {
      if (historyRef.current.length === 0) addLine('<span class="text-gray-400">fc: no history available</span>');
      else historyRef.current.forEach((cmd, i) => addLine(`  <span class="text-gray-400">${(i + 1).toString().padStart(4)}</span>  ${cmd}`));
    },
    'sudo !!': () => addLine('<span class="text-[#FF3366]">roman</span> is not in the sudoers file. This incident will be reported.'),
    vim: () => {
      addLine('<span class="text-[#00FF66]">VIM — Vi IMproved 9.1</span>');
      addLine('');
      addLine('  <span class="text-gray-400">~</span>');
      addLine('  <span class="text-gray-400">~</span>');
      addLine('  <span class="text-gray-400">~</span>');
      addLine('  <span class="text-gray-400">~</span>');
      addLine('  <span class="text-gray-400">:q</span>  <--- good luck');
    },
    curl: () => {
      addLine('<span class="text-gray-400">  % Total    % Received % Xferd  Average Speed</span>');
      addLine('<span class="text-gray-400">  100   142  100   142    0     0  99999      0</span>');
      addLine('');
      addLine('<span class="text-[#00FF66]">HTTP/2 200</span>');
      addLine('<span class="text-gray-400">content-type: application/json</span>');
      addLine('');
      addLine('  <span class="text-[#00FF66]">{</span>');
      addLine('    <span class="text-[#3399FF]">"status"</span>: <span class="text-[#FFE600]">"ok"</span>,');
      addLine('    <span class="text-[#3399FF]">"message"</span>: <span class="text-[#FFE600]">"Hello from portfolio API"</span>');
      addLine('  <span class="text-[#00FF66]">}</span>');
    },
    ping: () => {
      addLine('<span class="text-[#00FF66]">PING</span> google.com (142.250.185.78): 56 data bytes');
      addLine('  64 bytes from <span class="text-[#00FF66]">142.250.185.78</span>: icmp_seq=0 ttl=118 time=12.3ms');
      addLine('  64 bytes from <span class="text-[#00FF66]">142.250.185.78</span>: icmp_seq=1 ttl=118 time=11.8ms');
      addLine('  64 bytes from <span class="text-[#00FF66]">142.250.185.78</span>: icmp_seq=2 ttl=118 time=13.1ms');
      addLine('  64 bytes from <span class="text-[#00FF66]">142.250.185.78</span>: icmp_seq=3 ttl=118 time=10.9ms');
      addLine('');
      addLine('<span class="text-gray-400">  --- google.com ping statistics ---</span>');
      addLine('  4 packets transmitted, 4 received, <span class="text-[#00FF66]">0% packet loss</span>');
      addLine('  round-trip min/avg/max = 10.9/12.0/13.1 ms');
    },
    'docker ps': () => {
      addLine('<span class="text-[#3399FF]">CONTAINER ID</span>   <span class="text-[#00FF66]">IMAGE</span>          <span class="text-[#FFE600]">STATUS</span>        <span class="text-[#FF3366]">NAMES</span>');
      addLine('  a1b2c3d4e5f6   portfolio:v1    Up 24h         portfolio_web');
      addLine('  f6e5d4c3b2a1   postgres:16     Up 24h         portfolio_db');
      addLine('  e5f6a1b2c3d4   redis:7-alpine  Up 24h         portfolio_cache');
    },
    'git status': () => {
      addLine('<span class="text-[#00FF66]">On branch</span> main');
      addLine('Your branch is up to date with \'origin/main\'.');
      addLine('');
      addLine('  <span class="text-[#FFE600]">Changes not staged for commit:</span>');
      addLine('    <span class="text-[#FF3366]">modified:</span>   Terminal.tsx');
      addLine('    <span class="text-[#FF3366]">modified:</span>   globals.css');
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
    tree: () => {
      addLine('<span class="text-[#3399FF]">portfolio/</span>');
      addLine('  ├── <span class="text-[#3399FF]">app/</span>');
      addLine('  │   ├── <span class="text-[#3399FF]">components/</span>');
      addLine('  │   │   ├── Terminal.tsx');
      addLine('  │   │   ├── ProjectCard.tsx');
      addLine('  │   │   ├── GitNode.tsx');
      addLine('  │   │   ├── ContactForm.tsx');
      addLine('  │   │   └── SectionReveal.tsx');
      addLine('  │   ├── page.tsx');
      addLine('  │   ├── layout.tsx');
      addLine('  │   └── globals.css');
      addLine('  ├── public/');
      addLine('  │   ├── favicon.svg');
      addLine('  │   └── projects/');
      addLine('  ├── package.json');
      addLine('  └── README.md');
    },
    ssh: () => {
      addLine('<span class="text-[#00FF66]">SSH connection established.</span>');
      addLine('  <span class="text-gray-400">OpenSSH_9.7, OpenSSL 3.2.0</span>');
      addLine('  <span class="text-gray-400">debug1: Authentication succeeded.</span>');
      addLine('  <span class="nf-k">Host</span><span class="nf-s">:</span> portfolio.server');
      addLine('  <span class="nf-k">User</span><span class="nf-s">:</span> roman');
      addLine('  <span class="nf-k">Port</span><span class="nf-s">:</span> 22');
      addLine('  <span class="nf-k">Cipher</span><span class="nf-s">:</span> chacha20-poly1305@openssh.com');
      addLine('  <span class="text-[#00FF66]">Last login: Mon Jun  2 09:15:42</span>');
    },
    'ip a': () => {
      addLine('<span class="text-[#3399FF]">1: lo</span>: &lt;LOOPBACK,UP&gt; mtu 65536');
      addLine('    inet <span class="text-[#00FF66]">127.0.0.1/8</span> scope host lo');
      addLine('<span class="text-[#3399FF]">2: eth0</span>: &lt;BROADCAST,MULTICAST,UP&gt; mtu 1500');
      addLine('    inet <span class="text-[#00FF66]">10.0.0.42/24</span> brd 10.0.0.255 scope global eth0');
      addLine('<span class="text-[#3399FF]">3: wlan0</span>: &lt;BROADCAST,MULTICAST,UP&gt; mtu 1500');
      addLine('    inet <span class="text-[#00FF66]">192.168.1.42/24</span> brd 192.168.1.255 scope global wlan0');
      addLine('<span class="text-[#3399FF]">4: docker0</span>: &lt;NO-CARRIER,BROADCAST,MULTICAST,UP&gt; mtu 1500');
      addLine('    inet <span class="text-[#00FF66]">172.17.0.1/16</span> brd 172.17.255.255 scope global docker0');
    },
    figlet: () => { addLine('Usage: <span class="text-[#FFE600]">figlet &lt;text&gt;</span>'); },
    clear: () => { if (outputRef.current) outputRef.current.innerHTML = ''; },
    exit: () => {
      addLine('<span class="text-[#FF3366]">logout</span>');
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

      const multiWordCommands = ['cat about.txt', 'cat skills.json', 'ls projects/', 'cat contact', 'df -h', 'ps aux', 'docker ps', 'git status', 'sudo !!', 'ip a'];
      const fullCmd = multiWordCommands.find(c => raw.toLowerCase() === c);

      if (fullCmd && commands[fullCmd]) {
        commands[fullCmd]();
      } else if (cmd.startsWith('echo ')) {
        addLine(`<span class="text-gray-300">${raw.slice(5)}</span>`);
      } else if (cmd.startsWith('figlet ')) {
        const text = raw.slice(7).trim().toUpperCase() || 'hello';
        const big = text.split('').map(c => c + ' ').join('');
        addLine('<span class="text-[#00FF66]">╔══════════════════╗</span>');
        addLine('<span class="text-[#00FF66]">║</span>   ' + big + '   <span class="text-[#00FF66]">║</span>');
        addLine('<span class="text-[#00FF66]">╚══════════════════╝</span>');
      } else if (cmd.startsWith('sudo') || cmd.startsWith('sudo\t')) {
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
        <div className="flex items-center justify-between px-4 py-2 bg-[#252525] border-b border-gray-700/50 shrink-0 select-none">
          <div className="flex items-center gap-1.5">
            <div className="w-3 h-3 rounded-full bg-[#FF3366] hover:brightness-125 transition-all"></div>
            <div className="w-3 h-3 rounded-full bg-[#FFE600] hover:brightness-125 transition-all"></div>
            <div className="w-3 h-3 rounded-full bg-[#00FF66] hover:brightness-125 transition-all"></div>
          </div>
          <span className="text-gray-500 text-[10px] sm:text-xs font-mono">
            <span className="text-[#00FF66]">roman_ivanov</span>
            <span className="text-gray-600">@</span>
            <span className="text-[#00FF66]">portfolio</span>
            <span className="text-gray-600">:~$</span>
          </span>
        </div>
        <div
          className="p-3 sm:p-4 cursor-text select-text flex-1 overflow-y-auto text-gray-300"
          style={{ minHeight: '20rem', maxHeight: '26rem' }}
          onClick={() => setActive(true)}
        >
          <div ref={outputRef} className="text-[11px] sm:text-xs leading-relaxed"></div>
          {inputLineVisible && (
            <div className="mt-2 pt-2 border-t border-gray-700/30 text-[11px] sm:text-xs text-gray-300">
              <span className="text-acid-green font-bold">❯</span>
              <span className="ml-2 text-gray-200">{input}</span>
              <span className="cursor-blink text-acid-green ml-0.5">█</span>
            </div>
          )}
        </div>
      </div>
      <div className="flex items-center justify-between mt-2 shrink-0 px-1">
        <p className="text-[10px] text-gray-600">
          <span className="text-gray-600">⏎</span> <span className="text-gray-500">type</span> <span className="text-[#00FF66]">help</span> <span className="text-gray-500">for commands</span>
        </p>
        <p className="text-[10px] text-gray-600">
          {active ? <span className="text-[#00FF66]">●</span> : <span className="text-gray-600">●</span>} {active ? 'ready' : 'focus to type'}
        </p>
      </div>
    </div>
  );
}
