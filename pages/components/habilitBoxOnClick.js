import Image from 'next/image'

export default function HabilitBoxOnClick({ className, text_title, text_description, src, width, height }) {
    function ImageBoxOnClick() {
        const title = document.querySelector(`#habilit_title`);
        const description = document.querySelector(`#habilit_description`);
        
        title.innerHTML = text_title;
        description.innerHTML = text_description;
    }

    return (
        <Image className={className} onClick={ImageBoxOnClick} text_title={text_title} text_description={text_description} src={src} width={width} height={height} />
    )
}