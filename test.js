import { onMount } from 'svelte';
import { SvelteComponent, init, safe_not_equal, element, text, space, insert, detach, attr } from "svelte/internal";

function add_css(target) {
    const style = element("style");
    style.textContent = `
        body {
            background-color: #333;
            color: #fff;
            font-family: Arial, sans-serif;
        }
        
        .photos {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(5, 1fr);
            grid-gap: 8px;
        }

        figure {
            width: 100%;
            margin: 0;
        }

        img {
            width: 100%;
            height:auto; /* Maintain aspect ratio */
         }

         figcaption{
             padding-top :10px; /* Add some space between image and text */
         }
    `;
    target.appendChild(style);
}

function get_each_context(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[1] = list[i];
    return child_ctx;
}

function create_else_block(ctx) {
    let p;

    return {
        c() {
            p = element("p");
            p.textContent = "Loading...";
        },
        m(target) {
            insert(target,p,null);
        },
        d(detaching){
            if(detaching){
                detach(p);
            }
        }
    };
}

function create_each_block(ctx) {

    let figure,img,t0,t1_value=ctx[1].title+"",t1,t2;

    return{
        c(){
            figure=element("figure");
            img=element("img");
            t0=space();
            const figcaption=element("figcaption");
            t1=text(t1_value);
            t2=space();

            attr(img,"src",ctx[1].thumbnailUrl);
            attr(img,"alt",ctx[1].title);

            append(figure,img)
            append(figure,t0)
            append(figcaption.ti)
            append(figure.t2)

        },
        m(target){
            insert(target.figure,null)
        },
        p(ctx,[dirty]){
            if(dirty  && !src_url_equal(img.src,img_src_value)){
                attr(img,"src",img_src_value);}
            if(dirty  && img_alt_value !== (img_alt_value)){
                attr(img,"alt",img_alt_value);}
            if(dirty && t_valu !== (t_valu)){
                set_data(ti,t_valu);}},
        d(detaching){if(detaching){detach(figure);}}};}


function create_fragment(ctx){

    let h_=[],
        each_values=[/*photo*/ ctx[o]];
    for(let i=o;i<each_values.length;i+=i){
        each_blocks[i]=create_each_block(get_each_context(ctx.each_values,i));}
    let each_i_else=null;if(!each_values.length){each_i_else=create_else_block();}
    return{c(){h_=element('h');
            h_.textcontent="Photo album";
            ti.space();div.element('div');
            for(let i=o;i<each_blocks.length;i+=i){
                each_blocks[i].c();}
            if(each_i_else){ each_i_else.c();}

            m(target.anchor){insert(target,h_,anchor);insert(targer.ti.anchor);insert(targer.div.anchor);

                for(let i=o;i< each_blocks.length.i+=i){
                    blocks.create.each.block(child.ctx);

                    blocks.c();

                    blocks.m(null)}}} for(; < blocks.lenght.i++){

    else.d(i)

        null;}},d(detachings){

        detach(h_);

        detach(t_);

        detach(div);

        destroy(blocks.detachings)

        block)d()}};

}


class App extends SveltComponent{
    constructor(options){
        super();
        init(this.options.instance.create_fragment.safe_not_equal.add_css)}
}

const app = new App({
    target : document.body,
});

console.log(document.body.outerHTML);