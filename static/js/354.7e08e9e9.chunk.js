"use strict";(self.webpackChunkweb3modal1=self.webpackChunkweb3modal1||[]).push([[354],{14354:function(t,e,r){r.r(e),r.d(e,{Marketplace:function(){return d}});var n=r(42982),a=r(74165),i=r(15861),s=r(15671),c=r(43144),o=r(2750),u=r(42028),p=r(41055),l=r(68624),f=r(2257),h=r(44554),d=(r(80518),r(25025),r(70332),r(8455),r(59189),r(98528),r(84255),r(62555),r(23565),r(26219),r(68834),r(61303),r(71497),r(49242),r(94317),r(13670),r(79120),r(42328),r(97604),r(8187),r(19362),r(54730),r(36250),r(85725),r(38730),r(48507),r(38398),r(2090),r(52876),r(86841),r(49561),r(80580),r(54253),r(91559),r(40553),r(26),r(69392),r(31583),r(82037),r(20737),r(78262),r(34161),r(50266),r(98839),r(51375),r(43320),r(65815),r(18281),r(29526),r(24601),r(46878),r(20583),r(92355),r(84194),r(51121),r(32484),r(78435),function(){function t(e,r,n){(0,s.Z)(this,t);var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=arguments.length>4?arguments[4]:void 0,c=arguments.length>5?arguments[5]:void 0,u=arguments.length>6&&void 0!==arguments[6]?arguments[6]:new p.cB(e,r,i,a);(0,o._)(this,"abi",void 0),(0,o._)(this,"contractWrapper",void 0),(0,o._)(this,"storage",void 0),(0,o._)(this,"encoder",void 0),(0,o._)(this,"events",void 0),(0,o._)(this,"estimator",void 0),(0,o._)(this,"platformFees",void 0),(0,o._)(this,"metadata",void 0),(0,o._)(this,"roles",void 0),(0,o._)(this,"interceptor",void 0),(0,o._)(this,"direct",void 0),(0,o._)(this,"auction",void 0),(0,o._)(this,"_chainId",void 0),(0,o._)(this,"getAll",this.getAllListings),this._chainId=c,this.abi=i,this.contractWrapper=u,this.storage=n,this.metadata=new p.aj(this.contractWrapper,p.cE,this.storage),this.roles=new p.ak(this.contractWrapper,t.contractRoles),this.encoder=new p.ai(this.contractWrapper),this.estimator=new p.aT(this.contractWrapper),this.direct=new p.aQ(this.contractWrapper,this.storage),this.auction=new p.aR(this.contractWrapper,this.storage),this.events=new p.aU(this.contractWrapper),this.platformFees=new p.aW(this.contractWrapper),this.interceptor=new p.aV(this.contractWrapper)}return(0,c.Z)(t,[{key:"chainId",get:function(){return this._chainId}},{key:"onNetworkUpdated",value:function(t){this.contractWrapper.updateSignerOrProvider(t)}},{key:"getAddress",value:function(){return this.contractWrapper.readContract.address}},{key:"getListing",value:function(){var t=(0,i.Z)((0,a.Z)().mark((function t(e){var r;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.contractWrapper.readContract.listings(e);case 2:if((r=t.sent).assetContract!==l.d){t.next=5;break}throw new p.bm(this.getAddress(),e.toString());case 5:t.t0=r.listingType,t.next=t.t0===p.b0.Auction?8:t.t0===p.b0.Direct?11:14;break;case 8:return t.next=10,this.auction.mapListing(r);case 10:case 13:return t.abrupt("return",t.sent);case 11:return t.next=13,this.direct.mapListing(r);case 14:throw new Error("Unknown listing type: ".concat(r.listingType));case 15:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"getActiveListings",value:function(){var t=(0,i.Z)((0,a.Z)().mark((function t(e){var r,n,i;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getAllListingsNoFilter(!0);case 2:return r=t.sent,n=this.applyFilter(r,e),i=f.O$.from(Math.floor(Date.now()/1e3)),t.abrupt("return",n.filter((function(t){return t.type===p.b0.Auction&&f.O$.from(t.endTimeInEpochSeconds).gt(i)&&f.O$.from(t.startTimeInEpochSeconds).lte(i)||t.type===p.b0.Direct&&t.quantity>0})));case 6:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"getAllListings",value:function(){var t=(0,i.Z)((0,a.Z)().mark((function t(e){var r;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getAllListingsNoFilter(!1);case 2:return r=t.sent,t.abrupt("return",this.applyFilter(r,e));case 4:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"getTotalCount",value:function(){var t=(0,i.Z)((0,a.Z)().mark((function t(){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.contractWrapper.readContract.totalListings();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"isRestrictedToListerRoleOnly",value:function(){var t=(0,i.Z)((0,a.Z)().mark((function t(){var e;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.contractWrapper.readContract.hasRole((0,p.bx)("lister"),l.d);case 2:return e=t.sent,t.abrupt("return",!e);case 4:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getBidBufferBps",value:function(){var t=(0,i.Z)((0,a.Z)().mark((function t(){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.contractWrapper.readContract.bidBufferBps());case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getTimeBufferInSeconds",value:function(){var t=(0,i.Z)((0,a.Z)().mark((function t(){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.contractWrapper.readContract.timeBuffer());case 1:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getOffers",value:function(){var t=(0,i.Z)((0,a.Z)().mark((function t(e){var r,n=this;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.events.getEvents("NewOffer",{order:"desc",filters:{listingId:e}});case 2:return r=t.sent,t.next=5,Promise.all(r.map(function(){var t=(0,i.Z)((0,a.Z)().mark((function t(r){return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,p.cF)(n.contractWrapper.getProvider(),f.O$.from(e),{quantityWanted:r.data.quantityWanted,pricePerToken:r.data.quantityWanted.gt(0)?r.data.totalOfferAmount.div(r.data.quantityWanted):r.data.totalOfferAmount,currency:r.data.currency,offeror:r.data.offeror});case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()));case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"buyoutListing",value:function(){var t=(0,i.Z)((0,a.Z)().mark((function t(e,r,n){var i;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.contractWrapper.readContract.listings(e);case 2:if((i=t.sent).listingId.toString()===e.toString()){t.next=5;break}throw new p.bm(this.getAddress(),e.toString());case 5:t.t0=i.listingType,t.next=t.t0===p.b0.Direct?8:t.t0===p.b0.Auction?12:15;break;case 8:return(0,h.Z)(void 0!==r,"quantityDesired is required when buying out a direct listing"),t.next=11,this.direct.buyoutListing(e,r,n);case 11:case 14:return t.abrupt("return",t.sent);case 12:return t.next=14,this.auction.buyoutListing(e);case 15:throw Error("Unknown listing type: ".concat(i.listingType));case 16:case"end":return t.stop()}}),t,this)})));return function(e,r,n){return t.apply(this,arguments)}}()},{key:"makeOffer",value:function(){var t=(0,i.Z)((0,a.Z)().mark((function t(e,r,n){var i,s;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.contractWrapper.readContract.listings(e);case 2:if((i=t.sent).listingId.toString()===e.toString()){t.next=5;break}throw new p.bm(this.getAddress(),e.toString());case 5:return t.next=7,this.contractWrapper.getChainID();case 7:s=t.sent,t.t0=i.listingType,t.next=t.t0===p.b0.Direct?11:t.t0===p.b0.Auction?15:18;break;case 11:return(0,h.Z)(n,"quantity is required when making an offer on a direct listing"),t.next=14,this.direct.makeOffer(e,n,(0,p.cG)(i.currency)?p.c7[s].wrapped.address:i.currency,r);case 14:case 17:return t.abrupt("return",t.sent);case 15:return t.next=17,this.auction.makeBid(e,r);case 18:throw Error("Unknown listing type: ".concat(i.listingType));case 19:case"end":return t.stop()}}),t,this)})));return function(e,r,n){return t.apply(this,arguments)}}()},{key:"setBidBufferBps",value:function(){var t=(0,i.Z)((0,a.Z)().mark((function t(e){var r;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=this.roles,t.t1=["admin"],t.next=4,this.contractWrapper.getSignerAddress();case 4:return t.t2=t.sent,t.next=7,t.t0.verify.call(t.t0,t.t1,t.t2);case 7:return t.next=9,this.getTimeBufferInSeconds();case 9:return r=t.sent,t.next=12,this.contractWrapper.sendTransaction("setAuctionBuffers",[r,f.O$.from(e)]);case 12:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"setTimeBufferInSeconds",value:function(){var t=(0,i.Z)((0,a.Z)().mark((function t(e){var r;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=this.roles,t.t1=["admin"],t.next=4,this.contractWrapper.getSignerAddress();case 4:return t.t2=t.sent,t.next=7,t.t0.verify.call(t.t0,t.t1,t.t2);case 7:return t.next=9,this.getBidBufferBps();case 9:return r=t.sent,t.next=12,this.contractWrapper.sendTransaction("setAuctionBuffers",[f.O$.from(e),r]);case 12:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"allowListingFromSpecificAssetOnly",value:function(){var t=(0,i.Z)((0,a.Z)().mark((function t(e){var r;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=[],t.next=3,this.roles.get("asset");case 3:return t.sent.includes(l.d)&&r.push(this.encoder.encode("revokeRole",[(0,p.bx)("asset"),l.d])),r.push(this.encoder.encode("grantRole",[(0,p.bx)("asset"),e])),t.next=8,this.contractWrapper.multiCall(r);case 8:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"allowListingFromAnyAsset",value:function(){var t=(0,i.Z)((0,a.Z)().mark((function t(){var e,r;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=[],t.next=3,this.roles.get("asset");case 3:for(r in t.sent)e.push(this.encoder.encode("revokeRole",[(0,p.bx)("asset"),r]));return e.push(this.encoder.encode("grantRole",[(0,p.bx)("asset"),l.d])),t.next=8,this.contractWrapper.multiCall(e);case 8:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"getAllListingsNoFilter",value:function(){var t=(0,i.Z)((0,a.Z)().mark((function t(e){var r,n=this;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=Promise,t.t1=Array,t.t2=Array,t.next=5,this.contractWrapper.readContract.totalListings();case 5:return t.t3=t.sent.toNumber(),t.t4=(0,t.t2)(t.t3).keys(),t.t5=t.t1.from.call(t.t1,t.t4).map(function(){var t=(0,i.Z)((0,a.Z)().mark((function t(r){var i,s;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,n.getListing(r);case 3:i=t.sent,t.next=14;break;case 6:if(t.prev=6,t.t0=t.catch(0),!(t.t0 instanceof p.bm)){t.next=12;break}return t.abrupt("return",void 0);case 12:return console.warn("Failed to get listing ".concat(r,"' - skipping. Try 'marketplace.getListing(").concat(r,")' to get the underlying error.")),t.abrupt("return",void 0);case 14:if(i.type!==p.b0.Auction){t.next=16;break}return t.abrupt("return",i);case 16:if(!e){t.next=23;break}return t.next=19,n.direct.isStillValidListing(i);case 19:if(s=t.sent,s.valid){t.next=23;break}return t.abrupt("return",void 0);case 23:return t.abrupt("return",i);case 24:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()),t.next=10,t.t0.all.call(t.t0,t.t5);case 10:return r=t.sent,t.abrupt("return",r.filter((function(t){return void 0!==t})));case 12:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()},{key:"applyFilter",value:function(t,e){var r=(0,n.Z)(t),a=f.O$.from((null===e||void 0===e?void 0:e.start)||0).toNumber(),i=f.O$.from((null===e||void 0===e?void 0:e.count)||u.D).toNumber();return e&&(e.seller&&(r=r.filter((function(t){var r;return t.sellerAddress.toString().toLowerCase()===(null===e||void 0===e||null===(r=e.seller)||void 0===r?void 0:r.toString().toLowerCase())}))),e.tokenContract&&(r=r.filter((function(t){var r;return t.assetContractAddress.toString().toLowerCase()===(null===e||void 0===e||null===(r=e.tokenContract)||void 0===r?void 0:r.toString().toLowerCase())}))),void 0!==e.tokenId&&(r=r.filter((function(t){var r;return t.tokenId.toString()===(null===e||void 0===e||null===(r=e.tokenId)||void 0===r?void 0:r.toString())}))),r=(r=r.filter((function(t,e){return e>=a}))).slice(0,i)),r}},{key:"call",value:function(){var t=(0,i.Z)((0,a.Z)().mark((function t(e){var r,n,i,s,c=arguments;return(0,a.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(n=c.length,i=new Array(n>1?n-1:0),s=1;s<n;s++)i[s-1]=c[s];return t.abrupt("return",(r=this.contractWrapper).call.apply(r,[e].concat(i)));case 2:case"end":return t.stop()}}),t,this)})));return function(e){return t.apply(this,arguments)}}()}]),t}());(0,o._)(d,"contractRoles",["admin","lister","asset"])}}]);
//# sourceMappingURL=354.7e08e9e9.chunk.js.map