import{_ as t,o as e,c as s,a}from"./app.73513d9d.js";const h=JSON.parse('{"title":"扩容 System","description":"","frontmatter":{},"headers":[],"relativePath":"guide/dilation.md"}'),o={name:"guide/dilation.md"},i=a('<h1 id="扩容-system" tabindex="-1">扩容 System <a class="header-anchor" href="#扩容-system" aria-hidden="true">#</a></h1><p>进入 Recovery，使用 MTP 将解压后的&quot;MI8SE_5GB_System.zip&quot;传输到设备中<br> 选择刷入，选择&quot;MI8SE_5GB_System.zip&quot;,点击刷入并滑动确认<br> 在清除中双清和格式化 DATA(不确定是否支持 Dirty Flash，推荐格式化)</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>在扩容后您的 128GB 闪存设备会识别为 64GB，这可能是 Android 只识别二进制数的原因</p></div><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>在此步操作中，你修改了 System 和 Data 分区的大小，如果 AVB 未关闭，您将无法启动设备<br> 关闭 AVB 使用 准备 章节下载的关闭 AVB 工具即可</p></div>',4),c=[i];function r(_,d,n,l,p,m){return e(),s("div",null,c)}const S=t(o,[["render",r]]);export{h as __pageData,S as default};
