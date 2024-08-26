function verif()
{
    npermis=document.getElementById('npermis').value
    modele=document.getElementById('modele').selectedIndex
    srt=document.getElementById('srt').value
    cdt=document.getElementById('cdt').value
    cft=document.getElementById('cft').value
    captcha=document.getElementById('cc').checked

    if(npermis.length!=8 || isNaN(npermis.substr(0,2)) || isNaN(npermis.substr(3,5)) || npermis.charAt(2)!='/')
    {
        alert('npermis doit etre de 8 chiffres avec "/" en 3éme caractére')
        return false
    }
    if(!modele)
    {
        alert('choisir un modele')
        return false
    }
    if(!srt || srt<0 || srt>10)
    {
        alert('entre un nombre entre 0 et 10')
        return false
    }
    if(!cdt || cdt<0 || cdt>10)
    {
        alert('entre un nombre entre 0 et 10')
        return false
    }
    if(!cft || cft<0 || cft>10)
    {
        alert('entre un nombre entre 0 et 10')
        return false
    }
    if(!captcha)
    {
        alert('captcha obligatoire')
        return false
    }
    else{
        alert('formulaire bien envoyé')
        return true
    }
}