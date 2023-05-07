import{_ as s,c as a,o as l,N as n}from"./chunks/framework.5e1c669d.js";const i=JSON.parse('{"title":"Route","description":"","frontmatter":{},"headers":[],"relativePath":"fr/api/route.md"}'),o={name:"fr/api/route.md"},p=n(`<h1 id="route" tabindex="-1">Route <a class="header-anchor" href="#route" aria-label="Permalink to &quot;Route&quot;">​</a></h1><p>Cette classe représente une route dans le routeur. Vous pouvez créer une instance de cette classe directement, mais vous pouvez aussi utiliser les méthodes de la classe <code>AlteRouter\\AlteRouter</code> pour créer une route.</p><h2 id="sommaire" tabindex="-1">Sommaire <a class="header-anchor" href="#sommaire" aria-label="Permalink to &quot;Sommaire&quot;">​</a></h2><nav class="table-of-contents"><ul><li><a href="#sommaire">Sommaire</a></li><li><a href="#getmethod">getMethod</a></li><li><a href="#getpath">getPath</a></li><li><a href="#gethandler">getHandler</a></li><li><a href="#iscallable">isCallable</a></li><li><a href="#getname">getName</a></li><li><a href="#where">where</a></li><li><a href="#match">match</a></li><li><a href="#generate">generate</a></li></ul></nav><h2 id="getmethod" tabindex="-1">getMethod <a class="header-anchor" href="#getmethod" aria-label="Permalink to &quot;getMethod&quot;">​</a></h2><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">Route</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">getMethod</span><span style="color:#89DDFF;">():</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">string</span></span></code></pre></div><p>Récupère la méthode HTTP de la route. Les verbes HTTP sont : <code>GET</code>, <code>POST</code>, <code>PUT</code>, <code>PATCH</code>, <code>DELETE</code>, <code>HEAD</code> et <code>OPTIONS</code>.</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">route </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Route</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">GET</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/path</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">callback</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#82AAFF;">var_dump</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">route</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">getMethod</span><span style="color:#89DDFF;">());</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// string(3) &quot;GET&quot;</span></span></code></pre></div><h2 id="getpath" tabindex="-1">getPath <a class="header-anchor" href="#getpath" aria-label="Permalink to &quot;getPath&quot;">​</a></h2><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">Route</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">getPath</span><span style="color:#89DDFF;">():</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">string</span></span></code></pre></div><p>Récupère le chemin que la route doit matcher.</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">route </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Route</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">GET</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/path/to/resource</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">callback</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#82AAFF;">var_dump</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">route</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">getPath</span><span style="color:#89DDFF;">());</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// string(17) &quot;/path/to/resource&quot;</span></span></code></pre></div><h2 id="gethandler" tabindex="-1">getHandler <a class="header-anchor" href="#gethandler" aria-label="Permalink to &quot;getHandler&quot;">​</a></h2><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">Route</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">getHandler</span><span style="color:#89DDFF;">():</span><span style="color:#A6ACCD;"> callable</span><span style="color:#89DDFF;">|</span><span style="color:#C792EA;">string</span></span></code></pre></div><p>Récupère le gestionnaire de la route. Le gestionnaire peut être une fonction anonyme ou une chaîne de caractères.</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">route </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Route</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">GET</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/path</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">callback</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#82AAFF;">var_dump</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">route</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">getHandler</span><span style="color:#89DDFF;">());</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// string(8) &quot;callback&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">route </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Route</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">GET</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/path</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello world</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">});</span></span>
<span class="line"><span style="color:#82AAFF;">var_dump</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">route</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">getHandler</span><span style="color:#89DDFF;">());</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// php callable</span></span></code></pre></div><h2 id="iscallable" tabindex="-1">isCallable <a class="header-anchor" href="#iscallable" aria-label="Permalink to &quot;isCallable&quot;">​</a></h2><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">Route</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">isCallable</span><span style="color:#89DDFF;">():</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">bool</span></span></code></pre></div><p>Vérifie si le gestionnaire de la route est une fonction anonyme.</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">route </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Route</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">GET</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/path</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">callback</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#82AAFF;">var_dump</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">route</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">isCallable</span><span style="color:#89DDFF;">());</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// bool(false)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">route </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Route</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">GET</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/path</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello world</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">});</span></span>
<span class="line"><span style="color:#82AAFF;">var_dump</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">route</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">isCallable</span><span style="color:#89DDFF;">());</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// bool(true)</span></span></code></pre></div><h2 id="getname" tabindex="-1">getName <a class="header-anchor" href="#getname" aria-label="Permalink to &quot;getName&quot;">​</a></h2><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">Route</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">getName</span><span style="color:#89DDFF;">():</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">string</span><span style="color:#89DDFF;">|null</span></span></code></pre></div><p>Récupère le nom de la route. Si la route n&#39;a pas de nom, la méthode retourne <code>null</code>.</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">route </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Route</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">GET</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/path</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">callback</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#82AAFF;">var_dump</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">route</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">getName</span><span style="color:#89DDFF;">());</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// NULL</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">route </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Route</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">GET</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/path</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">callback</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">route_name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#82AAFF;">var_dump</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">route</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">getName</span><span style="color:#89DDFF;">());</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// string(10) &quot;route_name&quot;</span></span></code></pre></div><h2 id="where" tabindex="-1">where <a class="header-anchor" href="#where" aria-label="Permalink to &quot;where&quot;">​</a></h2><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">Route</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">where</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">param</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">regex</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> Route</span></span></code></pre></div><p>Ajoute une contrainte sur un paramètre de la route. Si la contrainte n&#39;est pas respectée, la route ne matchera pas.</p><ul><li><code>string $param</code> : Le nom du paramètre.</li><li><code>string $regex</code> : L&#39;expression régulière qui doit matcher avec la valeur du paramètre. Cela peut être une expression régulière ou un alias de paramètre (voir la classe <code>AlteRouter\\PathParameterAliasRegex</code>).</li></ul><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">route </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Route</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">GET</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/path/{id}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">callback</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">route</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">where</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">id</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">int</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// Ou</span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">route </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Route</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">GET</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/path/{id}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">callback</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">route</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">where</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">id</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">[0-9]+</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span></code></pre></div><h2 id="match" tabindex="-1">match <a class="header-anchor" href="#match" aria-label="Permalink to &quot;match&quot;">​</a></h2><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">Route</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">match</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">path</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> PathParameterAliasRegex </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">pathParameterAliasRegex</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">bool</span></span></code></pre></div><p>Vérifie si le chemin passé en paramètre matche avec le chemin de la route. Si le chemin matche, la méthode retourne <code>true</code>, sinon elle retourne <code>false</code>.</p><ul><li><code>string $path</code> : Le chemin à matcher.</li><li><code>PathParameterAliasRegex $pathParameterAliasRegex</code> : L&#39;objet qui contient les alias de paramètres.</li></ul><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">route </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Route</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">GET</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/path/{id:int}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">callback</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#82AAFF;">var_dump</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">route</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">match</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/path/123</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">));</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// bool(true)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">route </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Route</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">GET</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/path/{id}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">callback</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">route</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">where</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">id</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">int</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#82AAFF;">var_dump</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">route</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">match</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/path/123</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">));</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// bool(true)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">route </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Route</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">GET</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/path/{id:int}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">callback</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);*</span></span>
<span class="line"><span style="color:#82AAFF;">var_dump</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">route</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">match</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/path/abc</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">));</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// bool(false)</span></span></code></pre></div><h2 id="generate" tabindex="-1">generate <a class="header-anchor" href="#generate" aria-label="Permalink to &quot;generate&quot;">​</a></h2><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">Route</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">generate</span><span style="color:#89DDFF;">(</span><span style="color:#C792EA;">array</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">parameters</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">string</span></span></code></pre></div><p>Génère un chemin à partir des paramètres passés en paramètre. Si le tableau contient des clefs qui ne sont pas des paramètres de la route, elles seront ajoutées à la fin du chemin généré en query parameters.</p><ul><li><code>array $parameters</code> : Les paramètres de la route.</li></ul><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">route </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Route</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">GET</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/path/{id}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">callback</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#82AAFF;">var_dump</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">route</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">generate</span><span style="color:#89DDFF;">([</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">id</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">123</span><span style="color:#89DDFF;">]));</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// string(10) &quot;/path/123&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">route </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Route</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">GET</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/path/{id}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">callback</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#82AAFF;">var_dump</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">route</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">generate</span><span style="color:#89DDFF;">([</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">id</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">123</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">foo</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">bar</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">page</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#89DDFF;">]));</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// string(20) &quot;/path/123?foo=bar&amp;page=1&quot;</span></span></code></pre></div>`,39),e=[p];function t(r,c,D,F,y,C){return l(),a("div",null,e)}const u=s(o,[["render",t]]);export{i as __pageData,u as default};
