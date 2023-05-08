import{_ as s,c as a,o as e,N as o}from"./chunks/framework.5e1c669d.js";const h=JSON.parse('{"title":"Getting Started","description":"","frontmatter":{},"headers":[],"relativePath":"introduction/getting-started.md"}'),n={name:"introduction/getting-started.md"},l=o(`<h1 id="getting-started" tabindex="-1">Getting Started <a class="header-anchor" href="#getting-started" aria-label="Permalink to &quot;Getting Started&quot;">​</a></h1><h2 id="requirements" tabindex="-1">Requirements <a class="header-anchor" href="#requirements" aria-label="Permalink to &quot;Requirements&quot;">​</a></h2><ul><li>Need to have PHP 8.2 or higher installed.</li><li>Need to have <a href="https://getcomposer.org/download/" target="_blank" rel="noreferrer">Composer</a> installed.</li></ul><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h2><p>Using your terminal, go to your project folder and run the following command :</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">composer</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">require</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">quenti77/alterouter</span></span></code></pre></div><p>If not already done, add the following code to your php file:</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// Change the path according to your project</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">require</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">__DIR__</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/vendor/autoload.php</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><h3 id="create-a-router" tabindex="-1">Create a router <a class="header-anchor" href="#create-a-router" aria-label="Permalink to &quot;Create a router&quot;">​</a></h3><p>To create a router, you just need to instantiate the class <code>AlteRouter\\Alterouter</code> :</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">router </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> AlteRouter</span><span style="color:#89DDFF;">\\</span><span style="color:#FFCB6B;">Alterouter</span><span style="color:#89DDFF;">();</span></span></code></pre></div><p>If your project is in a subfolder, you need to specify the path of this subfolder :</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">router </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> AlteRouter</span><span style="color:#89DDFF;">\\</span><span style="color:#FFCB6B;">Alterouter</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/sub-folder</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span></code></pre></div><h3 id="create-a-route" tabindex="-1">Create a route <a class="header-anchor" href="#create-a-route" aria-label="Permalink to &quot;Create a route&quot;">​</a></h3><p>To create a route, there are several methods:</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// Create a route with the generic method &quot;addRoute&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">router</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">addRoute</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">GET</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/path</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello World !</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">route-name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span></code></pre></div><p>Here are the parameters of the method <code>addRoute</code> :</p><ul><li><code>string $method</code> : The HTTP method of the route. The possible values are : <code>GET</code>, <code>POST</code>, <code>PUT</code>, <code>PATCH</code>, <code>DELETE</code>, <code>HEAD</code>, <code>OPTIONS</code>.</li><li><code>string $path</code> : The path of the route. The path can contain parameters. The parameters are prefixed with brackets. Example : <code>/path/{id}</code>.</li><li><code>callable|string $callback</code> : The handler of the route. The handler can be a function or a string.</li><li><code>string $name = null</code> : The name of the route. This parameter is optional.</li></ul><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// Create a route with the method &quot;get&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">router</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">get</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/path</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Hello World !</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">},</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">route-name</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span></code></pre></div><p>Unlike the <code>addRoute</code> method, the <code>get</code> method does not take as parameter the HTTP method of the route, because this method is specific to the <code>GET</code> method.</p><p>He exists a method for each HTTP method : <code>get</code>, <code>post</code>, <code>put</code>, <code>patch</code>, <code>delete</code>, <code>head</code>, <code>options</code>.</p><h3 id="match-a-route" tabindex="-1">Match a route <a class="header-anchor" href="#match-a-route" aria-label="Permalink to &quot;Match a route&quot;">​</a></h3><p>To match a route, you just need to call the <code>match</code> method with the HTTP method and the URL of the route. You can use the <code>AlteRouter\\Request</code> class to get the HTTP method and the URL of the route.</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">route </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">router</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">match</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">AlteRouter</span><span style="color:#89DDFF;">\\</span><span style="color:#FFCB6B;">Request</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">getMethodFromGlobals</span><span style="color:#89DDFF;">(),</span><span style="color:#A6ACCD;"> AlteRouter</span><span style="color:#89DDFF;">\\</span><span style="color:#FFCB6B;">Request</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">getPathFromGlobals</span><span style="color:#89DDFF;">());</span></span></code></pre></div><p>If the route is not found, the <code>match</code> method returns <code>null</code>. Otherwise, it returns an <code>AlteRouter\\Route</code> object.</p><h3 id="execute-a-route" tabindex="-1">Execute a route <a class="header-anchor" href="#execute-a-route" aria-label="Permalink to &quot;Execute a route&quot;">​</a></h3><p>Depending on whether the route found has a handler with an anonymous function or a string, you must execute the route differently. Here is an example :</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">route </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">router</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">match</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">AlteRouter</span><span style="color:#89DDFF;">\\</span><span style="color:#FFCB6B;">Request</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">getMethodFromGlobals</span><span style="color:#89DDFF;">(),</span><span style="color:#A6ACCD;"> AlteRouter</span><span style="color:#89DDFF;">\\</span><span style="color:#FFCB6B;">Request</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">getPathFromGlobals</span><span style="color:#89DDFF;">());</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">route </span><span style="color:#89DDFF;">!==</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">is_string</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">route</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">getHandler</span><span style="color:#89DDFF;">()))</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">[$</span><span style="color:#A6ACCD;">controller</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">method</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">explode</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">route</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">getHandler</span><span style="color:#89DDFF;">());</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">controller </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">controller</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">controller</span><span style="color:#89DDFF;">-&gt;$</span><span style="color:#A6ACCD;">method</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">route</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">getParams</span><span style="color:#89DDFF;">());</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">else</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">call_user_func_array</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">route</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">getHandler</span><span style="color:#89DDFF;">(),</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">route</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">getParams</span><span style="color:#89DDFF;">());</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><p>This is a simple example to show you how to execute a route. You can code your own system.</p>`,30),t=[l];function p(r,c,D,F,y,i){return e(),a("div",null,t)}const A=s(n,[["render",p]]);export{h as __pageData,A as default};
