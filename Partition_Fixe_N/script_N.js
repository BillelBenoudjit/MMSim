/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 * MIT license https://www.opensource.org/licenses/mit-license.php/
 * @author Lea Verou http://lea.verou.me
 */(function(){var e=/\blang(?:uage)?-(?!\*)(\w+)\b/i,t=self.Prism={util:{type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},clone:function(e){var n=t.util.type(e);switch(n){case"Object":var r={};for(var i in e)e.hasOwnProperty(i)&&(r[i]=t.util.clone(e[i]));return r;case"Array":return e.slice()}return e}},languages:{extend:function(e,n){var r=t.util.clone(t.languages[e]);for(var i in n)r[i]=n[i];return r},insertBefore:function(e,n,r,i){i=i||t.languages;var s=i[e],o={};for(var u in s)if(s.hasOwnProperty(u)){if(u==n)for(var a in r)r.hasOwnProperty(a)&&(o[a]=r[a]);o[u]=s[u]}return i[e]=o},DFS:function(e,n){for(var r in e){n.call(e,r,e[r]);t.util.type(e)==="Object"&&t.languages.DFS(e[r],n)}}},highlightAll:function(e,n){var r=document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code');for(var i=0,s;s=r[i++];)t.highlightElement(s,e===!0,n)},highlightElement:function(r,i,s){var o,u,a=r;while(a&&!e.test(a.className))a=a.parentNode;if(a){o=(a.className.match(e)||[,""])[1];u=t.languages[o]}if(!u)return;r.className=r.className.replace(e,"").replace(/\s+/g," ")+" language-"+o;a=r.parentNode;/pre/i.test(a.nodeName)&&(a.className=a.className.replace(e,"").replace(/\s+/g," ")+" language-"+o);var f=r.textContent;if(!f)return;f=f.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ");var l={element:r,language:o,grammar:u,code:f};t.hooks.run("before-highlight",l);if(i&&self.Worker){var c=new Worker(t.filename);c.onmessage=function(e){l.highlightedCode=n.stringify(JSON.parse(e.data),o);t.hooks.run("before-insert",l);l.element.innerHTML=l.highlightedCode;s&&s.call(l.element);t.hooks.run("after-highlight",l)};c.postMessage(JSON.stringify({language:l.language,code:l.code}))}else{l.highlightedCode=t.highlight(l.code,l.grammar,l.language);t.hooks.run("before-insert",l);l.element.innerHTML=l.highlightedCode;s&&s.call(r);t.hooks.run("after-highlight",l)}},highlight:function(e,r,i){return n.stringify(t.tokenize(e,r),i)},tokenize:function(e,n,r){var i=t.Token,s=[e],o=n.rest;if(o){for(var u in o)n[u]=o[u];delete n.rest}e:for(var u in n){if(!n.hasOwnProperty(u)||!n[u])continue;var a=n[u],f=a.inside,l=!!a.lookbehind,c=0;a=a.pattern||a;for(var h=0;h<s.length;h++){var p=s[h];if(s.length>e.length)break e;if(p instanceof i)continue;a.lastIndex=0;var d=a.exec(p);if(d){l&&(c=d[1].length);var v=d.index-1+c,d=d[0].slice(c),m=d.length,g=v+m,y=p.slice(0,v+1),b=p.slice(g+1),w=[h,1];y&&w.push(y);var E=new i(u,f?t.tokenize(d,f):d);w.push(E);b&&w.push(b);Array.prototype.splice.apply(s,w)}}}return s},hooks:{all:{},add:function(e,n){var r=t.hooks.all;r[e]=r[e]||[];r[e].push(n)},run:function(e,n){var r=t.hooks.all[e];if(!r||!r.length)return;for(var i=0,s;s=r[i++];)s(n)}}},n=t.Token=function(e,t){this.type=e;this.content=t};n.stringify=function(e,r,i){if(typeof e=="string")return e;if(Object.prototype.toString.call(e)=="[object Array]")return e.map(function(t){return n.stringify(t,r,e)}).join("");var s={type:e.type,content:n.stringify(e.content,r,i),tag:"span",classes:["token",e.type],attributes:{},language:r,parent:i};s.type=="comment"&&(s.attributes.spellcheck="true");t.hooks.run("wrap",s);var o="";for(var u in s.attributes)o+=u+'="'+(s.attributes[u]||"")+'"';return"<"+s.tag+' class="'+s.classes.join(" ")+'" '+o+">"+s.content+"</"+s.tag+">"};if(!self.document){self.addEventListener("message",function(e){var n=JSON.parse(e.data),r=n.language,i=n.code;self.postMessage(JSON.stringify(t.tokenize(i,t.languages[r])));self.close()},!1);return}var r=document.getElementsByTagName("script");r=r[r.length-1];if(r){t.filename=r.src;document.addEventListener&&!r.hasAttribute("data-manual")&&document.addEventListener("DOMContentLoaded",t.highlightAll)}})();;
Prism.languages.markup={comment:/&lt;!--[\w\W]*?-->/g,prolog:/&lt;\?.+?\?>/,doctype:/&lt;!DOCTYPE.+?>/,cdata:/&lt;!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/&lt;\/?[\w:-]+\s*(?:\s+[\w:-]+(?:=(?:("|')(\\?[\w\W])*?\1|\w+))?\s*)*\/?>/gi,inside:{tag:{pattern:/^&lt;\/?[\w:-]+/i,inside:{punctuation:/^&lt;\/?/,namespace:/^[\w-]+?:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/gi,inside:{punctuation:/=|>|"/g}},punctuation:/\/?>/g,"attr-name":{pattern:/[\w:-]+/g,inside:{namespace:/^[\w-]+?:/}}}},entity:/&amp;#?[\da-z]{1,8};/gi};Prism.hooks.add("wrap",function(e){e.type==="entity"&&(e.attributes.title=e.content.replace(/&amp;/,"&"))});;
Prism.languages.css={comment:/\/\*[\w\W]*?\*\//g,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*{))/gi,inside:{punctuation:/[;:]/g}},url:/url\((["']?).*?\1\)/gi,selector:/[^\{\}\s][^\{\};]*(?=\s*\{)/g,property:/(\b|\B)[\w-]+(?=\s*:)/ig,string:/("|')(\\?.)*?\1/g,important:/\B!important\b/gi,ignore:/&(lt|gt|amp);/gi,punctuation:/[\{\};:]/g};Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{style:{pattern:/(&lt;|<)style[\w\W]*?(>|&gt;)[\w\W]*?(&lt;|<)\/style(>|&gt;)/ig,inside:{tag:{pattern:/(&lt;|<)style[\w\W]*?(>|&gt;)|(&lt;|<)\/style(>|&gt;)/ig,inside:Prism.languages.markup.tag.inside},rest:Prism.languages.css}}});;
Prism.languages.clike={comment:{pattern:/(^|[^\\])(\/\*[\w\W]*?\*\/|(^|[^:])\/\/.*?(\r?\n|$))/g,lookbehind:!0},string:/("|')(\\?.)*?\1/g,"class-name":{pattern:/((?:(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/ig,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/g,"boolean":/\b(true|false)\b/g,"function":{pattern:/[a-z0-9_]+\(/ig,inside:{punctuation:/\(/}}, number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/g,operator:/[-+]{1,2}|!|&lt;=?|>=?|={1,3}|(&amp;){1,2}|\|?\||\?|\*|\/|\~|\^|\%/g,ignore:/&(lt|gt|amp);/gi,punctuation:/[{}[\];(),.:]/g};
;
Prism.languages.javascript=Prism.languages.extend("clike",{keyword:/\b(var|let|if|else|while|do|for|return|in|instanceof|function|new|with|typeof|try|throw|catch|finally|null|break|continue)\b/g,number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?|NaN|-?Infinity)\b/g});Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/g,lookbehind:!0}});Prism.languages.markup&&Prism.languages.insertBefore("markup","tag",{script:{pattern:/(&lt;|<)script[\w\W]*?(>|&gt;)[\w\W]*?(&lt;|<)\/script(>|&gt;)/ig,inside:{tag:{pattern:/(&lt;|<)script[\w\W]*?(>|&gt;)|(&lt;|<)\/script(>|&gt;)/ig,inside:Prism.languages.markup.tag.inside},rest:Prism.languages.javascript}}});
;
Prism.hooks.add("after-highlight",function(e){var t=e.element.parentNode;if(!t||!/pre/i.test(t.nodeName)||t.className.indexOf("line-numbers")===-1){return}var n=1+e.code.split("\n").length;var r;lines=new Array(n);lines=lines.join("<span></span>");r=document.createElement("span");r.className="line-numbers-rows";r.innerHTML=lines;if(t.hasAttribute("data-start")){t.style.counterReset="linenumber "+(parseInt(t.getAttribute("data-start"),10)-1)}e.element.appendChild(r)})
;
function Process(size, time) {
	this.size = size;
	this.timeLeft = time;
	this.allocatedBlock = null;
	this.id = processID;
	this.pushed=false;

	processID += 1;

	this.isAllocated = function() {
		return this.allocatedBlock != null;
	};

	this.tick = function() {
		this.timeLeft -=1;
	};
};

function MemControlBlock(size) {
	this.size = size;
	this.process = null;
	this.available = true;
	this.next = null;
	this.prev = null;
	this.tete = [];
	this.fromPartition = false; // Used to determine whether height of a MemControlBlock needs to be added

	this.setProcess = function(process) {
		if (process == null) {
			this.process = null;
			this.available = true;
		} else {
			this.process = process;
			this.available = false;
		};
	};
};

// Simulates memory
function Heap() {
	this.head = null;
	this.size = 0;

	this.compare = function(process) {
		
		blockBestFit = this.head;
		

		// Make sure our initial best block is valid
		while ((blockBestFit.size < process.size) || (!blockBestFit.available)) {
			blockBestFit = blockBestFit.next;
			if (blockBestFit == null) {return false}; // Means we couldn't even find an initial valid block
		};
		block = blockBestFit.next;
		while (block != null) {
			//log("Testing block: " + block.size);
			if ((block.size >= process.size) && (block.size < blockBestFit.size) && (blockBestFit.available)) {
				blockBestFit = block;
				//log("New best block: " + blockBestFit.size);
			};
			block = block.next;
		};

		blockBestFit.setProcess(process);
		process.allocatedBlock = blockBestFit;
		return true;
	}

	this.recherche = function(process) {
		blockBestFit = this.head;
		
		// Make sure our initial best block is valid
		while ((blockBestFit.size < process.size)) {
			blockBestFit = blockBestFit.next;
			if (blockBestFit == null) {return false}; // Means we couldn't even find an initial valid block
		};
		block = blockBestFit.next;
		while (block != null) {
			//log("Testing block: " + block.size);
			if ((block.size >= process.size) && (block.size < blockBestFit.size)) {
				blockBestFit = block;
				//log("New best block: " + blockBestFit.size);
			};
			block = block.next;
		};

		blockBestFit.tete.push(process);
		process.pushed=true;

		//console.log(blockBestFit.tete[0]);
	}

	this.rrr=function(){

	block = this.head;
	
	while (block != null) {
		//console.log(block);
		//console.log(block.tete);

		if (block.tete[0] != null) {
			file = block.tete;
			if (block.available) {
	  			process = file.shift();
	  			block.setProcess(process);
				process.allocatedBlock = block;
	  		}
	  	
	  	//heap.compare(process);
	}
	block = block.next;	
	}
}

	// Allocate process to memory.
	// Use best-fit method: from the list of holes, choose the smallest hole
	/*this.requestAllocation = function(process) {
		blockBestFit = this.head;

		// Make sure our initial best block is valid
		while ((blockBestFit.size < process.size) || (!blockBestFit.available)) {
			blockBestFit = blockBestFit.next;
			if (blockBestFit == null) {return false}; // Means we couldn't even find an initial valid block
		};
		//log("Initial best block: " + blockBestFit.size);

		// See if there's an even better block
		block = blockBestFit.next;
		while (block != null) {
			//log("Testing block: " + block.size);
			if ((block.size >= process.size) && (block.available) && (block.size < blockBestFit.size)) {
				blockBestFit = block;
				//log("New best block: " + blockBestFit.size);
			};
			block = block.next;
		};

		spaceLeftover = blockBestFit.size - (process.size + memControlBlockSize); // Space leftover if block was divided

		// Partition block if needed
		if (spaceLeftover > 0) {
			newBlock = new MemControlBlock(spaceLeftover);

			nextBlock = blockBestFit.next;
			if (nextBlock != null) {
				nextBlock.prev = newBlock;
				newBlock.next = nextBlock;
			};

			blockBestFit.next = newBlock;
			newBlock.prev = blockBestFit;

			blockBestFit.size = process.size;

			newBlock.fromPartition = true;
		};

		blockBestFit.setProcess(process);
		process.allocatedBlock = blockBestFit;
		return true;
	};*/

	this.deallocateProcess = function(process) {
		process.allocatedBlock.setProcess(null);
		process.allocatedBlock = null;
	};

	this.add = function(block) {
		if (this.head == null) {
			this.head = block;
		} else {
			block.next = this.head;
			this.head.prev = block;
			this.head = block;
		};

		this.size += block.size;
	}

	this.toString = function() {
		string = "[|";
		block = this.head;

		prefix = "";
		suffix = "</span> |";
		while (block != null) {
			if (block.available) {prefix = "<span style='color: #01DF01;'> "} else {prefix = "<span style='color: #FF0000;'> "};
			string += (prefix + block.size + suffix);
			block = block.next;
		};

		string += "]"
		return string;
	};

	this.repaint = function() {
		block = this.head;
		memoryDiv.innerHTML = "";
		fileDiv.innerHTML="";
		j = 0;

		while (block != null) {
			height = ((block.size/heap.size)*100);
			if (block.fromPartition) {
				height += (memControlBlockSize/heap.size)*100;
			};

			// Create div block element
			divBlock = document.createElement("div");
			divBlock.style.height = (height + "%");
			divBlock.setAttribute("id", "block"+j);
			if (block.available) {divBlock.className = "available"} else {divBlock.className = "unavailable"};
			
			divBlock.addEventListener("click",function(){
				//alert(j);
				//
				if(!clicked){
						var k='0',n=0;
						while(k!=j.toString()){
						$("#block"+k).addClass("hided");clicked=true;
						//console.log($(this).attr('id'));
						if ($(this).attr('id') === "block"+k) {
							clickedBlock = k;
							console.log(clickedBlock);
						}
						n=parseInt(k)+1;
						k=n.toString();
					};
				  $(this).removeClass("hided");
				  $(this).addClass("clicked");
					divfile = document.createElement("div");
					//divfile.className="available";
					divfile.setAttribute("id","SA");
					fileDiv.appendChild(divfile);		

				}else {		
					 k='0';n=0;
						while(k!=4){
						$("#block"+k).removeClass("hided");clicked=false;
						n=parseInt(k)+1;
						k=n.toString();
					};
				$(this).removeClass("clicked");

				}
			});


			memoryDiv.appendChild(divBlock);
			j++;
			// Add size label
			// TODO: Show process details on mouse over
		if(height>12){
			blockLabel = document.createElement("div");
			blockLabel.setAttribute("id", "blockLabel");
			blockLabel.style.height = (height + "%");
			blockLabel.style.margin = (height/2 + "px") ;
			blockLabel.innerHTML = block.size + "K";
			if (height <= 2) {
				blockLabel.style.display = "none";
			};
			divBlock.appendChild(blockLabel);
		};
			block = block.next;

		
		};
	};

	this.repaintFile = function() {
		cpt = 0;
		divfile.innerHTML = "";
		
		block = this.head;
		while (block != null && cpt < clickedBlock) {
			cpt++;
			block = block.next;
		};

		console.log(cpt);
		console.log(block);
		file = block.tete;
		
		divBlockName=document.createElement("div");
		divBlockName.innerHTML="File du Block N�"+(cpt+1);
		divBlockName.setAttribute("id", "BlockName");
		divfile.appendChild(divBlockName);
		
		cpt = 0;
		while (cpt < file.length) {
			heightFile = 10;
			divMaillon = document.createElement("div");
			//divMaillon.style.height = (heightFile + "%");
			divMaillon.setAttribute("id", "file"+cpt);
			divMaillon.setAttribute("class", "fifo");
			divMaillon.innerHTML="ID="+file[cpt].id;
			divfile.appendChild(divMaillon);
			if(cpt!=file.length-1){
					ligneMaillon = document.createElement("div");
					ligneMaillon.setAttribute("class","ligne");
					divfile.appendChild(ligneMaillon);
				}
			console.log(cpt);
			cpt++;
		};
	};
};

// Handle front-end process submission
document.getElementById("processForm").onsubmit = function () {
	elements = this.elements; // Form elements

	inProcessSize = elements.namedItem("processSize");
	inProcessTime = elements.namedItem("processTime");

	process = new Process(parseInt(inProcessSize.value), parseInt(inProcessTime.value));

/*	heap.requestAllocation(process);
	heap.repaint();*/
	processes.push(process);
	addProcessToTable(process);


	// Debug log
	log("Requesting: " + process.size);
	log(heap.toString() + "<br>");

	// Clear form
	inProcessSize.value = "";
	inProcessTime.value = "";

	return false;
};

function log(string) {
	logBox.innerHTML += (string + "<br />");
}

function addProcessToTable(process) {
	row = document.createElement("tr");
	row.setAttribute("id", "process" + process.id);

	colName = document.createElement("td");
	colName.innerHTML = process.id;

	colSize = document.createElement("td");
	colSize.innerHTML = process.size;

	colTime = document.createElement("td");
	colTime.setAttribute("id", "process" + process.id + "timeLeft");
	colTime.innerHTML = process.timeLeft;

	row.appendChild(colName);
	row.appendChild(colSize);
	row.appendChild(colTime);

	processTable.appendChild(row);
};

function removeProcessFromTable(process) {
	processTable.removeChild(document.getElementById("process" + process.id));
};

// TODO: Update 'time left' for each row in table 
function refreshTable() {
	for (i=0; i<processes.length; i++) {
		process = processes[i];
		document.getElementById("process" + process.id + "timeLeft").innerHTML = process.timeLeft;
	};
};

var logBox = document.getElementById("logBox");
var memoryDiv = document.getElementById("memory");
var processTable = document.getElementById("processTable");
var fileDiv=document.getElementById("file");
var memControlBlockSize = 16;
var processID = 0;
var processes = [];
var file=[];
var clicked = false;
var clickedBlock = 0;
var fileclicked;
var j=0;


heap = new Heap();
blockSizes = [256,25,100,200];

for (i=0; i<blockSizes.length; i++) {
	heap.add(new MemControlBlock(blockSizes[i]));
};

// Draw initial heap
heap.repaint();

// Start clock
// Loop through all processes and allocate those that require allocation. Deallocate those that have <0 time remaining
var clock = setInterval(function() {
	for (i=0; i<processes.length; i++) {
		process = processes[i];
		//alert("yooooooooooooooooooooooooooo");
		if (!process.isAllocated()) {
			//Recherche best fit
			if(!process.pushed){
			heap.recherche(process);}
			//file.push(process);
			//
			//heap.requestAllocation(process);
		} else {
			process.tick();
			if (process.timeLeft < 1) {
				// Deallocate process from heap
				heap.deallocateProcess(process);

				// Remove process from processes array
				index = processes.indexOf(process);
				if (index > -1) {
					processes.splice(index, 1);
				};

				// Remove process from table
				removeProcessFromTable(process);
			};
		};
	};
	//Defiler 
	heap.rrr();
	
	
	refreshTable();
	if (!clicked) {
		heap.repaint(); //alert(file[0]);	
	} else {
		heap.repaintFile();
	}
}, 500);




/*processSizes = [150, 383, 400, 800, 2000, 10, 50, 20, 300, 830];
var processIndex = 0;
var allocateProcesss = setInterval(function() {
	process = new Process(processSizes[processIndex]);
	//log("Requesting allocation for process: " + process.size);

	if (heap.requestAllocation(process)) {
		//log("Process successfully allocated.");
		//log("New heap: " + heap.toString() + "<br />");
		heap.repaint();
	} else {
		//log("Process failed to be allocated." + "<br />");
	};

	processIndex += 1;
	if (processIndex == (processSizes.length-1)) {
		clearInterval(allocateProcesss);
	}
}, 1000);*/

/*for (i=0; i<processSizes.length; i++) {
	process = new Process(processSizes[i]);
	log("Requesting allocation for process: " + process.size);

	if (heap.requestAllocation(process)) {
		log("Process successfully allocated.");
		log("New list: " + heap.toString() + "<br />");
		heap.repaint();
	} else {
		log("Process failed to be allocated." + "<br />");
	};
};*/
