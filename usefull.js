function transformPhoneNumber(phoneRaw)
{
    var phone = phoneRaw;
    phone = phone.split(' ').join('');
    phone = phone.split('(').join('');
    phone = phone.split(')').join('');
    phone = phone.split('-').join('');
    phone = phone.replace("+7","8");
    return phone;
}

exports.transformPhoneNumber = transformPhoneNumber;