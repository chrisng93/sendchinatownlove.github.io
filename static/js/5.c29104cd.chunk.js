(this.webpackJsonpsendchinatownlove=this.webpackJsonpsendchinatownlove||[]).push([[5,7],{100:function(e,t){},102:function(e,t,n){"use strict";n(26),n(0)},103:function(e,t,n){"use strict";n.d(t,"b",(function(){return m})),n.d(t,"a",(function(){return d})),n.d(t,"c",(function(){return p}));var a=n(104),r=n.n(a),o=n(105),s=n(120),i=n.n(s),c=(n(129),"https://api.sendchinatownlove.com/"),l=c+"sellers/",u=c+"charges",m=function(){var e=Object(o.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",i.a.get(l).then((function(e){return e})).catch((function(e){return e})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),d=function(){var e=Object(o.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",i.a.get(l+t).then((function(e){return e})).catch((function(e){return e})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(o.a)(r.a.mark((function e(t,n,a,s){var c,l,m;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=s.email,l=s.name,m=s.idempotency_key,e.next=4,i.a.post(u,{is_square:!0,nonce:t,line_items:[a],email:c,name:l,seller_id:n,idempotency_key:m},{headers:{"Access-Control-Allow-Origin":"*"}}).then(function(){var e=Object(o.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t);case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){throw e}));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t,n,a,r){return e.apply(this,arguments)}}()},109:function(e,t,n){e.exports={progressContainer:"styles_progressContainer__3QTH2",targetAmountBar:"styles_targetAmountBar__39mFS",currentRaisedBar:"styles_currentRaisedBar__3nyvm",contributionInfo:"styles_contributionInfo__2yMDv",tooltipTable:"styles_tooltipTable__1Bew2"}},112:function(e,t,n){e.exports=n.p+"static/media/404-error-image.f72ee016.png"},113:function(e,t,n){"use strict";var a=n(99);n.o(a,"getSeller")&&n.d(t,"getSeller",(function(){return a.getSeller})),n.o(a,"getSellers")&&n.d(t,"getSellers",(function(){return a.getSellers}));n(102)},115:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var a=n(0),r=n(98),o=n.n(r),s=n(109),i=n.n(s),c=n(202),l=n(27),u=Object(l.a)((function(e){return{tooltip:{backgroundColor:"#ffffff",color:"rgba(0, 0, 0, 0.87)",width:180,fontSize:e.typography.pxToRem(14),border:"1px solid #dadde9"}}}))(c.a),m=function(e){var t,n,r=e.amountRaised,s=e.targetAmount,c=e.progressBarColor,l=e.numContributions,m=e.numDonations,d=e.numGiftCards,p=e.donationAmount,_=e.giftCardAmount;return a.createElement("div",{className:i.a.progressContainer},a.createElement("div",{className:o()(i.a.targetAmountBar,"progress-bar")},a.createElement("div",{className:i.a.currentRaisedBar,style:{width:"".concat((t=r,n=s,t<n?t/n*100:100),"%"),backgroundColor:c}}," ")),a.createElement("div",{className:i.a.contributionInfo},a.createElement("div",null,"$",(Math.floor(r)/100).toLocaleString()," of $",(Math.floor(s)/100).toLocaleString()),a.createElement("div",null,a.createElement(u,{title:a.createElement(a.Fragment,null,a.createElement("table",{className:i.a.tooltipTable},a.createElement("tbody",null,a.createElement("tr",null,a.createElement("td",null,a.createElement("b",null,d)," vouchers"),a.createElement("td",null,a.createElement("b",null,"$",Math.floor(_)/100))),a.createElement("tr",null,a.createElement("td",null,a.createElement("b",null,m)," donations"),a.createElement("td",null,a.createElement("b",null,"$",Math.floor(p)/100)))))),enterTouchDelay:50,placement:"top"},a.createElement("div",null,a.createElement("b",null,l)," supporters")))))}},119:function(e,t,n){e.exports={container:"styles_container__1GePj",paymentHeader:"styles_paymentHeader__OmQrO",paymentContainer:"styles_paymentContainer__3PfAD",row:"styles_row__3dGjH",inputRow:"styles_inputRow__1h-gh",termsAndConditions:"styles_termsAndConditions__1eI_p",checkbox:"styles_checkbox__38N48",btnRow:"styles_btnRow__m72Gz",backBtn:"styles_backBtn__1r6gI",label:"styles_label__3Gsvi",icons:"styles_icons__LWRkK",text:"styles_text__1yrcV",squareCardRow:"styles_squareCardRow__1Sj4P",squareCardRowItem:"styles_squareCardRowItem__k1hHU"}},134:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var a=n(3),r=n(0),o=n.n(r),s=n(4),i=n(112),c=n.n(i);function l(){var e=Object(a.a)(["\n  font-weight: 450;\n  font-size: 1rem;\n  a {\n    color: #a7182d;\n  }\n"]);return l=function(){return e},e}function u(){var e=Object(a.a)(["\n  font-weight: 400;\n  margin: 0.2rem auto;\n"]);return u=function(){return e},e}function m(){var e=Object(a.a)(["\n  font-weight: 600;\n"]);return m=function(){return e},e}function d(){var e=Object(a.a)(["\n  margin: 0 auto;\n  width: 80%;\n  text-align: center;\n  display: ",";\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  flex: 1;\n"]);return d=function(){return e},e}function p(){var e=Object(a.a)(["\n  width: 80%;\n  max-width: 480px;\n  margin: 0 auto;\n"]);return p=function(){return e},e}function _(){var e=Object(a.a)(["\n  font-family: futura;\n  background-color: #ffffff;\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n"]);return _=function(){return e},e}var f=function(e){return o.a.createElement(h,null,o.a.createElement(y,{menuOpen:e.menuOpen},o.a.createElement(E,{src:c.a,alt:"error"}),o.a.createElement(v,null," Sorry Your Dumpling Was Not Found! "),o.a.createElement(b,null," ","The page you are trying does not exist or has been moved."),o.a.createElement(b,null,"Please try going back to the homepage."),o.a.createElement(g,null,o.a.createElement("a",{href:"https://sendchinatownlove.com/"},"GO TO HOMEPAGE"))))},h=s.a.main(_()),E=s.a.img(p()),y=s.a.div(d(),(function(e){return e.menuOpen?"none":"flex"})),v=s.a.div(m()),b=s.a.div(u()),g=s.a.div(l())},139:function(e,t,n){e.exports={container:"styles_container__3Cpsn",merchantIllustrationContainer:"styles_merchantIllustrationContainer__zMgd0",merchantIllustration:"styles_merchantIllustration__-rjv5",nationality:"styles_nationality__1LqAr",address:"styles_address__TJ44x",storeDetails:"styles_storeDetails__frA5Y"}},140:function(e,t,n){e.exports={navLinkContainer:"styles_navLinkContainer__2K1Dj",navLink:"styles_navLink__248sq","navLink--active":"styles_navLink--active__1j7FX"}},141:function(e,t,n){e.exports={container:"styles_container__VZ3u7"}},142:function(e,t,n){e.exports=n.p+"static/media/misc-store.7e1a70b6.png"},143:function(e,t,n){e.exports={donationsContainer:"styles_donationsContainer__2I-52",amountContainer:"styles_amountContainer__25lIo",selectAmtContainer:"styles_selectAmtContainer__GP83r",customAmt:"styles_customAmt__3IQuP",nextBtn:"styles_nextBtn__1QIOk",errorMessage:"styles_errorMessage__YVEH6"}},144:function(e,t,n){e.exports={amountContainer:"styles_amountContainer__5To4w",selectAmtContainer:"styles_selectAmtContainer__3PJud",customAmt:"styles_customAmt__2a-nw",nextBtn:"styles_nextBtn__avAYg",errorMessage:"styles_errorMessage__3-_LG",donationsContainer:"styles_donationsContainer__3a9yb"}},171:function(e,t,n){e.exports={container:"styles_container__2viEp",image:"styles_image__mrVUk",finishBtn:"styles_finishBtn__2yINT"}},172:function(e,t,n){e.exports=n.p+"static/media/chinatown-logo.f9e716ba.png"},174:function(e,t,n){e.exports={container:"styles_container__3Rmvf",ownerName:"styles_ownerName__3FfLm",ownerImage:"styles_ownerImage__1zndC",ownerContainer:"styles_ownerContainer__2jGJO",buttonContainer:"styles_buttonContainer__2bchx",button:"styles_button__1x3xR",summaryContainer:"styles_summaryContainer__2Z2qX",socialContainer:"styles_socialContainer__3pjen",socialIconContainer:"styles_socialIconContainer__1j4SA",storeSummaryLabel:"styles_storeSummaryLabel__3wuYH",fa:"styles_fa__33jUi",extraInfoKey:"styles_extraInfoKey__2vRcY",extraInfoValue:"styles_extraInfoValue__gWShN",extraInfoContainer:"styles_extraInfoContainer__3U7v_"}},175:function(e,t,n){e.exports=n.p+"static/media/female.46412c79.svg"},200:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return Ne}));var a=n(3),r=n(104),o=n.n(r),s=n(105),i=n(26),c=n(0),l=n.n(c),u=n(139),m=n.n(u),d=n(140),p=n.n(d),_=n(34),f=n(15),h=n(141),E=n.n(h),y=function(e){var t=e.story;return c.createElement("section",{className:E.a.container},t)},v=function(e){var t=e.className,n=e.story;return c.createElement("section",{className:t,"data-testid":"Story Header"},c.createElement("nav",{className:p.a.navLinkContainer},c.createElement(_.b,{className:p.a.navLink,activeClassName:p.a["navLink--active"],to:"#"},"Story")),c.createElement(f.c,null,c.createElement(f.a,{path:""},c.createElement(y,{story:n}))))},b=n(98),g=n.n(b),C=n(142),N=n.n(C),I=function(e){var t=e.seller,n=t.summary,a=t.story,r=t.cuisineName,o=t.locations;return c.createElement("section",{className:g()(m.a.container),"data-testid":"Store Info"},c.createElement("img",{src:t.hero_image_url?"https://merchant.sendchinatownlove.com/"+t.hero_image_url:N.a,alt:"".concat(t.name," Illustration"),className:m.a.merchantIllustration}),c.createElement("div",{className:m.a.nationality},r),c.createElement("div",null,o&&o.map((function(e){return c.createElement(c.Fragment,{key:e.seller_id},c.createElement("div",{className:m.a.address},e.address1),c.createElement("div",{className:m.a.address},e.address2),c.createElement("div",{className:m.a.address},e.city,", ",e.state," ",e.zip_code),c.createElement("div",{className:m.a.address},e.phone_number))}))),c.createElement("p",null,n),c.createElement(v,{story:a}))},x={amount:"",customInput:!1,modalView:-1},w=n(187),A=/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/,O=function(e,t){var n=t.type,a=t.payload;switch(n){case"SET_MODAL_VIEW":return Object(w.a)({},e,{modalView:a});case"SET_AMOUNT":return Object(w.a)({},e,{amount:a});case"CLOSE_MODAL":case"CLEAR_FORMS":return x;default:return e}},S=l.a.createContext(x),T=l.a.createContext((function(){return null})),k=function(e){var t=l.a.useReducer(O,x),n=Object(i.a)(t,2),a=n[0],r=n[1];return l.a.createElement(S.Provider,{value:a},l.a.createElement(T.Provider,{value:r},e.children))};function R(){var e=l.a.useContext(S);if(void 0===e)throw new Error("useModalPaymentState must be used within a CountProvider");return e}function D(){var e=l.a.useContext(T);if(void 0===e)throw new Error("useModalPaymentDispatch must be used within a CountProvider");return e}var L=n(204),j=n(143),P=n.n(j),q=n(144),M=n.n(q),F=n(94),V=function(e){var t=Object(F.a)().t,n=R().amount,a=Object(c.useState)(!1),r=Object(i.a)(a,2),o=r[0],s=r[1],u=Object(c.useState)(""),m=Object(i.a)(u,2),d=m[0],p=m[1],_=D(),f=function(e,t,n){p(n),s(t),_({type:"SET_AMOUNT",payload:e})};return l.a.createElement("form",{id:"donation-form",className:g()(M.a.donationsContainer,"modalForm--form"),"data-testid":"Modal Amount"},l.a.createElement("div",null,l.a.createElement("h2",null,e.sellerName)),l.a.createElement("p",null,t("paymentProcessing.amount.header")),l.a.createElement("div",{className:M.a.amountContainer},l.a.createElement("label",{htmlFor:"select-amount"},t("paymentProcessing.amount.label1")),l.a.createElement("br",null),l.a.createElement("div",{className:M.a.selectAmtContainer},[{value:"10",text:"$10"},{value:"25",text:"$25"},{value:"50",text:"$50"},{value:"100",text:"$100"}].map((function(e){return l.a.createElement("button",{type:"button",className:d===e.text?"modalButton--selected":"modalButton--outlined",onClick:function(t){f(e.value,!1,e.text)}},e.text)}))),l.a.createElement("label",{htmlFor:"custom-amount"},t("paymentProcessing.amount.label2")),l.a.createElement("br",null),l.a.createElement("input",{name:"custom-amount",type:"number",onFocus:function(e){return f("",!0,"")},className:g()(M.a.customAmt,"modalInput--input"),onChange:function(e){f(e.target.value,!0,"")},value:o?n:"",placeholder:"$",min:"5",max:"10000"}),Number(n)<5&&o&&l.a.createElement("div",{className:M.a.errorMessage},t("paymentProcessing.amount.minimum")," ","gift_card"===e.purchaseType?"voucher":"donation"," ",t("paymentProcessing.amount.amount"),": $5"),Number(n)>1e4&&o&&l.a.createElement("div",{className:M.a.errorMessage},t("paymentProcessing.amount.maximum")," ","gift_card"===e.purchaseType?"voucher":"donation"," ",t("paymentProcessing.amount.amount"),": $10000")),l.a.createElement("button",{type:"button",className:g()(M.a.nextBtn,"modalButton--filled"),onClick:function(e){e.preventDefault(),_({type:"SET_MODAL_VIEW",payload:1})},disabled:Number(n)<5||Number(n)>1e4},t("paymentProcessing.amount.submit")))},B=n(201),U=n(108),G=(n(118),n(119)),W=n.n(G),z=function(e){return l.a.createElement("fieldset",{className:"sq-fieldset"},l.a.createElement(U.CreditCardNumberInput,null),l.a.createElement("div",{className:W.a.squareCardRow},l.a.createElement("div",{className:W.a.squareCardRowItem},l.a.createElement(U.CreditCardExpirationDateInput,null)),l.a.createElement("div",{className:W.a.squareCardRowItem},l.a.createElement(U.CreditCardCVVInput,null)),l.a.createElement("div",{className:W.a.squareCardRowItem},l.a.createElement(U.CreditCardPostalCodeInput,null))))},H=function(e){var t=e.canSubmit,n=Object(c.useContext)(U.Context),a=Object(c.useState)(!1),r=Object(i.a)(a,1)[0];return r=t,l.a.createElement("button",{type:"button",className:"modalButton--filled",onClick:function(e){e.preventDefault(),n.onCreateNonce()},disabled:!r},"Confirm")},$={ADDRESS_VERIFICATION_FAILURE:"The card issuer declined the request because the postal code is invalid.",ALLOWABLE_PIN_TRIES_EXCEEDED:"The card has exhausted its available pin entry retries set by the card issuer.",BAD_EXPIRATION:"The card expiration date is either missing or incorrectly formatted.",CARDHOLDER_INSUFFICIENT_PERMISSIONS:"The card issuer has declined the transaction due to restrictions on where the card can be used.",CARD_EXPIRED:"The card issuer declined the request because the card is expired.",CARD_PROCESSING_NOT_ENABLED:"The location provided in the API call is not enabled for credit card processing.",CARD_NOT_SUPPORTED:"The card is not supported in the geographic region.",CARD_TOKEN_EXPIRED:"The provided card token (nonce) has expired.",CARD_TOKEN_USED:"The provided card token (nonce) was already used to process payment.",CHIP_INSERTION_REQUIRED:"The card issuer requires reading the card using a chip reader.",CVV_FAILURE:"The card issuer declined the request because the CVV value is invalid.",EXPIRATION_FAILURE:"The card expiration date is either invalid or indicates that the card is expired.",GENERIC_DECLINE:"An unexpected error occurred.",GIFT_CARD_AVAILABLE_AMOUNT:"Voucher does not have sufficient balance for requested amount and tip.",INSUFFICIENT_FUNDS:"This payment source has insufficient funds to cover the payment.",INSUFFICIENT_PERMISSIONS:"This Square account does not have the permissions to accept this payment.",INVALID_ACCOUNT:"The card issuer was not able to locate account on record.",INVALID_CARD_DATA:"Generic error - the provided card data is invalid.",INVALID_EMAIL_ADDRESS:"The provided email address is invalid.",INVALID_EXPIRATION:"The expiration date for the payment card is invalid. For example, it indicates a date in the past.",INVALID_FEES:"The app_fee_money on a payment is too high.",INVALID_LOCATION:"This Square account cannot take payments in the specified region",INVALID_PIN:"The card issuer declined the request because the PIN is invalid.",INVALID_POSTAL_CODE:"The postal code is incorrectly formatted.",MANUALLY_ENTERED_PAYMENT_NOT_SUPPORTED:"The card must be swiped, tapped, or dipped.",PAN_FAILURE:"The specified card number is invalid.",PAYMENT_LIMIT_EXCEEDED:"Square declined the request because the payment amount exceeded the processing limit for this merchant.",TEMPORARY_ERROR:"A temporary internal error occurred.",TRANSACTION_LIMIT:"The card issuer has determined the payment amount is either too high or too low.",VOICE_FAILURE:"The card issuer declined the request because the issuer requires voice authorization from the cardholder.",CARD_DECLINED_VERIFICATION_REQUIRED:"This payment requires verification. For more information, see SCA Overview."};var K=n(99),X=function(e){var t=e.purchaseType,n=e.sellerId,a=e.sellerName,r=e.idempotencyKey,o=R().amount,s=D(),u=Object(c.useState)(!1),m=Object(i.a)(u,2),d=m[0],p=m[1],_=Object(c.useState)(""),f=Object(i.a)(_,2),h=f[0],E=f[1],y=Object(c.useState)(""),v=Object(i.a)(y,2),b=v[0],C=v[1],N=Object(c.useState)([]),I=Object(i.a)(N,2),x=I[0],w=I[1],O="donation"===t?"Donation":"Voucher purchase",S=d&&h.length>0&&b.length>0&&A.test(b);return l.a.createElement("div",{className:W.a.container},l.a.createElement("h2",{className:W.a.paymentHeader},"Complete your ",O.toLowerCase()),l.a.createElement("p",null,"Please add your payment information below"),l.a.createElement("div",{className:W.a.paymentContainer},l.a.createElement("h3",null,"Payment Information"),l.a.createElement("div",{className:W.a.inputRow},l.a.createElement("div",{className:W.a.row},l.a.createElement("span",{className:g()("fa fa-user",W.a.icons)}),l.a.createElement("input",{name:"name",type:"text",className:g()(W.a.label,"modalInput--input"),onChange:function(e){return E(e.target.value)},value:h,placeholder:"Name"})),l.a.createElement("div",{className:W.a.row},l.a.createElement("span",{className:g()("fa fa-envelope",W.a.icons)}),l.a.createElement("input",{name:"email",type:"email",className:g()(W.a.email,"modalInput--input",W.a.label),onChange:function(e){return C(e.target.value)},value:b,placeholder:"Email",pattern:A.source,required:!0}))),l.a.createElement("div",{className:W.a.sqPaymentForm},l.a.createElement(U.SquarePaymentForm,{sandbox:!1,applicationId:"sq0idp-7ElutjGrfi-QPUnXqkRt4w",locationId:"3D0QAW4CSZJWZ",cardNonceResponseReceived:function(e,a){if(w([]),!(e&&e.length>0&&e[0])){var i={amount:100*Number(o),currency:"usd",item_type:t,quantity:1},c={name:h,email:b,nonce:a,idempotency_key:r};return Object(K.makeSquarePayment)(a,n,i,c).then((function(e){200===e.status&&s({type:"SET_MODAL_VIEW",payload:2})})).catch((function(e){if(e.response){var t=[];e.response.data.errors?t=e.response.data.errors:e.response.data.message&&(t=[{code:"GENERIC_DECLINE",detail:e.response.data.message}]);var n=t.length>0?t.map((function(e){return t=$,e.code in t?$[e.code]:e.detail;var t})):[];w(n)}}))}w(e.map((function(e){return e.message})))},formId:"SPF",apiWrapper:""},l.a.createElement(z,null),l.a.createElement("div",{className:"sq-error-message"},x.map((function(e){return l.a.createElement("li",{key:"sq-error-".concat(e)},e)}))),l.a.createElement("br",null),l.a.createElement("h3",{className:W.a.text},"Checkout details"),l.a.createElement("span",{className:W.a.text}," ",O," of ",l.a.createElement("b",null,"$",o)," to ",a," "),l.a.createElement("p",null),l.a.createElement("div",null,l.a.createElement("label",{className:W.a.termsAndConditions},l.a.createElement(B.a,{value:"checkedA",inputProps:{"aria-label":"Checkbox A"},onClick:function(){return p(!d)},checked:d}),l.a.createElement("span",null,"I agree with the ",l.a.createElement("b",null,"Terms & Conditions")))),"Donation"===O?l.a.createElement("p",null,"By proceeding with your transaction, you understand that you are making a donation to ",a,". No goods or services were exchanged for this donation."):l.a.createElement("p",null,"By proceeding with your purchase, you understand that the voucher card is not redeemable for cash and can only be used at"," ",a,". All purchases are final. In the event that the merchant is no longer open at the time of redemption, Send Chinatown Love Inc. will not be able to refund your purchase."),l.a.createElement("div",{className:W.a.btnRow},l.a.createElement("button",{type:"button",className:g()("modalButton--back",W.a.backBtn),onClick:function(){return s({type:"SET_MODAL_VIEW",payload:0})}},"\u1438 Back"),l.a.createElement(H,{canSubmit:S}))))))},Y=n(171),Q=n.n(Y),J=n(172),Z=n.n(J),ee=function(e){var t=D();return c.createElement("div",{className:Q.a.container,"data-testid":"Modal Confirmation"},c.createElement("h2",null,"Thank you!"),c.createElement("p",null,"We appreciate your support. We'll"," ","gift_card"===e.purchaseType?"email you your voucher when ".concat(e.sellerName," opens back up!"):"let you know when ".concat(e.sellerName," receives your donation!")),c.createElement("img",{className:Q.a.image,src:Z.a,alt:"Logo"}),c.createElement("button",{className:g()(Q.a.finishBtn,"modalButton--filled"),onClick:function(){return t({type:"CLOSE_MODAL",payload:void 0})}},"Finish"))},te=Object(L.a)(),ne=function(e){var t=R().modalView,n=D();return l.a.createElement("div",{id:"donation-form",className:g()(P.a.donationsContainer,"modalForm--form"),style:{display:t>-1?"block":"none"}},l.a.createElement("button",{className:"closeButton--close",onClick:function(e){e.preventDefault(),n({type:"CLOSE_MODAL",payload:void 0})}},"\xd7"),0===t&&l.a.createElement(V,e),1===t&&l.a.createElement(X,Object.assign({},e,{idempotencyKey:te})),2===t&&l.a.createElement(ee,e))},ae=n(115),re=n(174),oe=n.n(re),se=n(175),ie=n.n(se),ce=n(176),le=n(197),ue=n(198),me=n(199),de=n(4);function pe(){var e=Object(a.a)(["\n  display: flex;\n  width: 100%;\n  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.2);\n  flex-direction: column;\n  align-items: center;\n  padding: 18px 32px;\n\n  order: 1;\n  grid-row: 1;\n  @media (min-width: 900px) {\n    position: sticky;\n    top: 20px;\n    order: 2;\n    grid-column: 2;\n  }\n  @media (max-width: 599px) {\n    font-size: 14px;\n    padding: 24px;\n  }\n"]);return pe=function(){return e},e}var _e=ne,fe=function(e){var t=D(),n=Object(c.useState)(""),a=Object(i.a)(n,2),r=a[0],o=a[1],s=function(e){t({type:"SET_MODAL_VIEW",payload:0}),o(e.target.value)},u=Object.keys(e.extraInfo).filter((function(t){return null!=e.extraInfo[t]})),m=window.location.href,d="Help raise money for "+e.sellerName,p={height:50,width:50};return l.a.createElement(he,null,l.a.createElement("figure",{className:oe.a.ownerContainer},l.a.createElement("img",{className:oe.a.ownerImage,src:e.imageSrc?"https://merchant.sendchinatownlove.com/"+e.imageSrc:ie.a,alt:e.ownerName})),l.a.createElement("h2",{className:oe.a.ownerName},e.ownerName),e.targetAmount&&l.a.createElement(ae.a,{amountRaised:e.amountRaised,targetAmount:e.targetAmount,progressBarColor:e.progressBarColor,numContributions:e.numContributions,numDonations:e.numDonations,numGiftCards:e.numGiftCards,donationAmount:e.donationAmount,giftCardAmount:e.giftCardAmount}),l.a.createElement("div",{className:oe.a.buttonContainer},e.acceptDonations&&l.a.createElement("button",{value:"donation",className:g()(oe.a.button,"button--filled"),onClick:s},"Donation"),e.sellGiftCards&&l.a.createElement("button",{value:"gift_card",className:g()(oe.a.button,"button--outlined"),onClick:s},"Voucher")),u!==[]?l.a.createElement("div",{className:oe.a.extraInfoContainer},u.map((function(t){return"Website"===t||"Menu"===t?l.a.createElement(l.a.Fragment,{key:t},l.a.createElement("p",{key:t,className:oe.a.extraInfoKey},"".concat(t,": "),l.a.createElement("a",{className:oe.a.extraInfoValue,href:"http://".concat(e.extraInfo[t]),target:"_blank",rel:"noopener noreferrer"},t))):l.a.createElement(l.a.Fragment,{key:t},l.a.createElement("p",{key:t,className:oe.a.extraInfoKey},"".concat(t,": "),l.a.createElement("span",{className:oe.a.extraInfoValue},e.extraInfo[t])))}))):"",l.a.createElement(_e,{purchaseType:r,sellerId:e.sellerId,sellerName:e.sellerName}),l.a.createElement("div",{className:oe.a.socialContainer},l.a.createElement("div",{className:oe.a.socialIconContainer},l.a.createElement(le.a,{url:m,quote:d,className:"share"},l.a.createElement(ce.SocialIcon,{network:"facebook",bgColor:"#a9182e",style:p}))),l.a.createElement("div",{className:oe.a.socialIconContainer},l.a.createElement(ue.a,{url:m,className:"share"},l.a.createElement(ce.SocialIcon,{network:"twitter",bgColor:"#a9182e",style:p}))),l.a.createElement("div",{className:oe.a.socialIconContainer},l.a.createElement(me.a,{url:m,className:"share"},l.a.createElement(ce.SocialIcon,{network:"email",bgColor:"#a9182e",style:p})))),l.a.createElement("div",{className:oe.a.mapsContainer}))},he=de.a.section(pe()),Ee=n(134),ye=n(113),ve=n(42);function be(){var e=Object(a.a)(["\n  align-items: start;\n  display: flex;\n  flex-direction: column-reverse;\n  margin: 0 auto;\n  max-width: 1200px;\n  min-height: 1200px;\n  @media (min-width: 900px) {\n    grid-template-columns: 2fr minmax(250px, 1fr);\n    display: grid;\n    grid-column-gap: 69px;\n  }\n  @media (max-width: 599px) {\n    font-size: 14px;\n    margin: 32px 0px;\n    margin-top: 0;\n  }\n"]);return be=function(){return e},e}function ge(){var e=Object(a.a)(["\n  font-weight: 600;\n  font-size: 32px;\n  max-width: 1200px;\n  margin: 12px auto;\n  margin-top: 24px;\n  width: 100%;\n  @media (min-width: 900px) {\n    width: 90%;\n    margin-top: 32px;\n  }\n"]);return ge=function(){return e},e}function Ce(){var e=Object(a.a)(["\n  background: white;\n  min-height: 1500px;\n  max-width: 1440px;\n  margin: 0 auto;\n  width: 90%;\n  ","\n"]);return Ce=function(){return e},e}var Ne=function(e){var t=Object(c.useState)(),n=Object(i.a)(t,2),a=n[0],r=n[1],l=Object(c.useState)(!1),u=Object(i.a)(l,2),m=u[0],d=u[1],p=Object(f.f)().id,_=function(){var e=Object(s.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(d(!0),e.t0=p,!e.t0){e.next=6;break}return e.next=5,Object(ye.getSeller)(p);case 5:e.t0=e.sent;case 6:t=e.t0,r(t.data),d(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){_()}),[]),a?c.createElement(Ie,{menuOpen:e.menuOpen},c.createElement(xe,null,a.name),c.createElement(we,null,c.createElement(I,{seller:{name:a.name,locations:a.locations,cuisineName:a.cuisine_name,story:a.story,summary:a.summary,hero_image_url:a.hero_image_url}}),c.createElement(k,null,c.createElement(fe,{acceptDonations:a.accept_donations,sellGiftCards:a.sell_gift_cards,amountRaised:a.amount_raised,targetAmount:a.target_amount,numContributions:a.num_contributions,numDonations:a.num_donations,numGiftCards:a.num_gift_cards,donationAmount:a.donation_amount,giftCardAmount:a.gift_card_amount,ownerName:a.owner_name,imageSrc:a.owner_image_url,sellerName:a.name,progressBarColor:a.progress_bar_color,extraInfo:{Type:a.business_type,Employees:a.num_employees,Founded:a.founded_year,Website:a.website_url,Menu:a.menu_url},sellerId:p})))):c.createElement(c.Fragment,null,m?c.createElement(ve.b,{isPage:!0}):c.createElement(Ee.default,{menuOpen:e.menuOpen}))},Ie=de.a.div(Ce(),(function(e){return e.menuOpen&&"display: none;"})),xe=de.a.div(ge()),we=de.a.div(be())},99:function(e,t,n){"use strict";var a=n(100);n.o(a,"getSeller")&&n.d(t,"getSeller",(function(){return a.getSeller})),n.o(a,"getSellers")&&n.d(t,"getSellers",(function(){return a.getSellers})),n.o(a,"makeSquarePayment")&&n.d(t,"makeSquarePayment",(function(){return a.makeSquarePayment}));var r=n(103);n.d(t,"getSeller",(function(){return r.a})),n.d(t,"getSellers",(function(){return r.b})),n.d(t,"makeSquarePayment",(function(){return r.c}))}}]);
//# sourceMappingURL=5.c29104cd.chunk.js.map