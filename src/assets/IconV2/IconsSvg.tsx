const IconArrow = () => {
    return (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.99992 1.58331V14.4166M7.99992 14.4166L14.4166 7.99998M7.99992 14.4166L1.58325 7.99998" stroke="#5E6061" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}

const IconAccounts = () => {
    return (
        <svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.013 1.46399H17.1067C15.1863 3.50759 13.6419 6.31512 12.4686 9.89142C11.3767 13.2195 10.7948 16.6825 10.7182 20.2805L6.11841 2.17491H1.35815L6.27644 21.5361H15.3444C15.3444 21.3842 15.3348 21.2348 15.3348 21.083C15.3348 17.3959 15.9406 13.7834 17.1546 10.2529C18.3686 6.71999 19.9873 3.79195 22.013 1.46399Z" fill="black" />
            <path d="M22.377 16.4198H20.1669V14.1955C20.1669 13.6629 19.7383 13.2315 19.2091 13.2315C18.6799 13.2315 18.2513 13.6629 18.2513 14.1955V16.4198H16.635C16.5417 17.0608 16.4674 17.7043 16.4124 18.3477H18.2537V20.5721C18.2537 21.1047 18.6823 21.536 19.2115 21.536C19.7407 21.536 20.1693 21.1047 20.1693 20.5721V18.3477H22.3794C22.9086 18.3477 23.3372 17.9164 23.3372 17.3838C23.3372 16.8512 22.9086 16.4198 22.3794 16.4198H22.377Z" fill="black" />
        </svg>
    )
}

const IconAddActions = ({ className, fill, stroke }: { className: string, fill: string, stroke: string }) => {
    return (
        <svg className={className} width="61" height="61" viewBox="0 0 61 61" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.416687" y="0.5" width="60" height="60" rx="30" fill={fill} />
            <path d="M30.4167 24.0833V36.9167M24 30.5H36.8333" stroke={stroke} stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}

const IconBalances = () => {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.5 12H14.51M1 3V17C1 18.1046 1.89543 19 3 19H17C18.1046 19 19 18.1046 19 17V7C19 5.89543 18.1046 5 17 5L3 5C1.89543 5 1 4.10457 1 3ZM1 3C1 1.89543 1.89543 1 3 1H15M15 12C15 12.2761 14.7761 12.5 14.5 12.5C14.2239 12.5 14 12.2761 14 12C14 11.7239 14.2239 11.5 14.5 11.5C14.7761 11.5 15 11.7239 15 12Z" stroke="#5A5D5A" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}

const IconBeneficiaries = ({ className, stroke }: { className: string, stroke: string }) => {
    return (
        <svg className={className} stroke={stroke} width="83" height="83" viewBox="0 0 83 83" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M29.7499 32C37.2058 32 43.2499 25.9558 43.2499 18.5C43.2499 11.0442 37.2058 5 29.7499 5C22.2941 5 16.2499 11.0442 16.2499 18.5C16.2499 25.9558 22.2941 32 29.7499 32Z" stroke={stroke} stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M50.2499 57.5H69.2499M59.745 67V48" stroke={stroke} stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M43.5752 48.4267C40.289 45.091 35.6343 43 30.4102 43C20.032 43 11.9112 51.2546 12.2608 61.0925L12.8601 78H47.9703L48.2499 70.0341" stroke={stroke} stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}

const IconCard = () => {
    return (
        <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 7H23M3 1H21C22.1046 1 23 1.89543 23 3V15C23 16.1046 22.1046 17 21 17H3C1.89543 17 1 16.1046 1 15V3C1 1.89543 1.89543 1 3 1Z" stroke="#5A5D5A" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}

const IconCards = () => {
    return (
        <svg width="31" height="21" viewBox="0 0 31 21" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M29.3025 0.5H1.94746C1.2168 0.5 0.625 1.08689 0.625 1.81148V19.1885C0.625 19.9131 1.2168 20.5 1.94746 20.5H29.3025C30.0332 20.5 30.625 19.9131 30.625 19.1885V1.81148C30.625 1.08689 30.0332 0.5 29.3025 0.5ZM27.9801 17.877H3.26992V3.12295H16.5606C15.2977 4.62131 14.2596 6.58197 13.4529 9.00492C12.6065 11.5459 12.1602 14.1918 12.104 16.9361L8.54323 3.12623H4.86348L8.66556 17.8738H15.6746C15.6746 17.759 15.668 17.6443 15.668 17.5295C15.668 14.7197 16.1375 11.9689 17.0731 9.27705C17.9195 6.85082 19.0237 4.79836 20.3792 3.11967H27.9768V17.8738L27.9801 17.877Z" fill="#191E25" />
            <path d="M21.9629 8.42131H24.2937C24.8425 8.42131 25.2856 7.98197 25.2856 7.4377C25.2856 6.89344 24.8425 6.4541 24.2937 6.4541H21.9629C21.4141 6.4541 20.971 6.89344 20.971 7.4377C20.971 7.98197 21.4141 8.42131 21.9629 8.42131Z" fill="#191E25" />
        </svg>
    )
}

const IconConvert = ({ className, stroke }: { className: string, stroke: string }) => {
    return (
        <svg className={className} width="83" height="83" viewBox="0 0 83 83" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M41.5966 60.02C51.5929 60.02 59.6966 51.9164 59.6966 41.92C59.6966 31.9237 51.5929 23.82 41.5966 23.82C31.6002 23.82 23.4966 31.9237 23.4966 41.92C23.4966 51.9164 31.6002 60.02 41.5966 60.02Z" stroke={stroke} stroke-width="5" stroke-linejoin="round" />
            <path d="M74.4966 32.6398C70.4766 18.6898 57.6166 8.49982 42.3866 8.49982C25.9366 8.49982 12.2566 20.3898 9.48656 36.0498L5.34656 31.1398" stroke={stroke} stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M8.68665 51.2098C12.7066 65.1598 25.5666 75.3498 40.7966 75.3498C57.2466 75.3498 70.9266 63.4598 73.6966 47.7998M73.6966 47.7898L77.8366 52.6998" stroke={stroke} stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}

const IconCrypto = () => {
    return (
        <svg width="22" height="26" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.68182 5H15.3182C18.1801 5 20.5 6.79087 20.5 9C20.5 11.2092 18.1801 13 15.3182 13M6.68182 5V13M6.68182 5H1.5M6.68182 5V1M15.3182 13H6.68182M15.3182 13C18.1801 13 20.5 14.7908 20.5 17C20.5 19.2092 18.1801 21 15.3182 21H6.68182M6.68182 13V21M6.68182 21H1.5M6.68182 21V25M11.8636 5V1M11.8636 25V21" stroke="#5A5D5A" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}

const IconCryptoBalances = () => {
    return (
        <svg width="18" height="27" viewBox="0 0 18 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.15295 13.6154L11.9526 13.6711M5.15295 13.6154L5.08907 21.4158L11.8887 21.4715C14.0403 21.4891 15.8032 19.7548 15.8208 17.6032C15.8384 15.4516 14.1042 13.6887 11.9526 13.6711M5.15295 13.6154L5.21684 5.81503M11.9526 13.6711C14.1042 13.6887 15.8671 11.9545 15.8847 9.80284C15.9023 7.65121 14.1681 5.88834 12.0164 5.87072L5.21684 5.81503M5.21684 5.81503L1.95882 5.78835M1.83103 21.3918L5.08906 21.4185M11.088 21.4678L11.0614 24.7258M6.53181 21.4305L6.50513 24.6885M11.2158 5.86423L11.2449 2.31153M6.6596 5.82691L6.68869 2.27422" stroke="#191E25" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}

const IconDeposit = ({ className, stroke }: { className: string, stroke: string }) => {
    return (
        <svg className={className} width="76" height="79" viewBox="0 0 76 79" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M62.7977 69.1119H66.2262C68.1119 69.1119 69.6548 67.5621 69.6548 65.6679V59.7799M69.6548 59.7799C71.5484 59.7799 73.0834 58.2379 73.0834 56.3359V52.8918C73.0834 50.9898 71.5484 49.4478 69.6548 49.4478M69.6548 59.7799H59.3691C57.4755 59.7799 55.9405 58.2379 55.9405 56.3359V52.8918C55.9405 50.9898 57.4755 49.4478 59.3691 49.4478H69.6548M62.7977 49.4478V37.6717C62.7977 35.7775 61.2548 34.2277 59.3691 34.2277H6.51195C4.62623 34.2277 3.08337 35.7775 3.08337 37.6717V72.556C3.08337 74.4502 4.62623 76 6.51195 76H59.3691C61.2548 76 62.7977 74.4502 62.7977 72.556V59.7799M69.6548 49.4478V30.7837C69.6548 28.8895 68.1119 27.3397 66.2262 27.3397H49.3519M25.3691 3V9.73945M35.6548 3V6.29542M45.9405 3V9.73945M47.8777 34.2277C48.8377 32.3507 49.3691 30.2154 49.3691 27.9596C49.3691 20.3483 43.2319 14.1835 35.6548 14.1835C28.0777 14.1835 21.9405 20.3483 21.9405 27.9596C21.9405 30.2154 22.4891 32.3507 23.4319 34.2277M21.9577 27.3397H14.3691C12.4834 27.3397 10.9405 28.8895 10.9405 30.7837V34.2277" stroke={stroke} stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}

const IconDolar = () => {
    return (
        <svg width="15" height="27" viewBox="0 0 15 27" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.46591 3.19251C2.73855 3.90613 0.375 6.11917 0.375 9.33463C0.375 11.3822 1.39347 12.8284 2.67824 13.7817C3.87976 14.6733 5.42168 15.2284 6.87981 15.6494C8.26542 16.0496 9.26891 16.4624 9.90149 16.9327C10.4516 17.3417 10.5568 17.6527 10.5568 18.0049C10.5568 18.8503 9.57188 20.2902 7.375 20.2902C5.93525 20.2902 4.88418 19.5864 4.45283 18.871L1.24906 21.1043C2.17598 22.6415 3.71506 23.7055 5.46591 24.1551V26.5H9.28409V24.1471C12.0115 23.4334 14.375 21.2204 14.375 18.0049C14.375 15.9582 13.3573 14.511 12.0732 13.5562C10.8716 12.6628 9.32966 12.1061 7.87019 11.6847C6.48324 11.2842 5.4797 10.8725 4.84704 10.403C4.29762 9.99533 4.19318 9.68609 4.19318 9.33463C4.19318 8.4893 5.17812 7.04937 7.375 7.04937C8.81688 7.04937 9.87222 7.75486 10.3026 8.46855L13.5063 6.23527C12.5787 4.69689 11.0359 3.63356 9.28409 3.18426V0.5H5.46591V3.19251Z" fill="#191E25" />
        </svg>
    )
}

const IconNotification = () => {
    return (
        <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.73 20C11.5542 20.3031 11.3018 20.5547 10.9982 20.7295C10.6946 20.9044 10.3504 20.9965 10 20.9965C9.64962 20.9965 9.30539 20.9044 9.00177 20.7295C8.69816 20.5547 8.44581 20.3031 8.27 20M16 7C16 5.4087 15.3679 3.88258 14.2426 2.75736C13.1174 1.63214 11.5913 1 10 1C8.4087 1 6.88258 1.63214 5.75736 2.75736C4.63214 3.88258 4 5.4087 4 7C4 14 1 16 1 16H19C19 16 16 14 16 7Z" stroke="#5E6061" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}

const IconUser = () => {
    return (
        <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M17 19V17C17 15.9391 16.5786 14.9217 15.8284 14.1716C15.0783 13.4214 14.0609 13 13 13H5C3.93913 13 2.92172 13.4214 2.17157 14.1716C1.42143 14.9217 1 15.9391 1 17V19M13 5C13 7.20914 11.2091 9 9 9C6.79086 9 5 7.20914 5 5C5 2.79086 6.79086 1 9 1C11.2091 1 13 2.79086 13 5Z" stroke="#5E6061" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

    )
}

const IconUsers = () => {
    return (
        <svg width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 19V17C21 15.1362 19.7252 13.5701 18 13.126M14.5 1.29076C15.9659 1.88415 17 3.32131 17 5C17 6.67869 15.9659 8.11585 14.5 8.70924M16 19C16 17.1362 16 16.2044 15.6955 15.4693C15.2895 14.4892 14.5108 13.7105 13.5307 13.3045C12.7956 13 11.8638 13 10 13H7C5.13623 13 4.20435 13 3.46927 13.3045C2.48915 13.7105 1.71046 14.4892 1.30448 15.4693C1 16.2044 1 17.1362 1 19M12.5 5C12.5 7.20914 10.7091 9 8.5 9C6.29086 9 4.5 7.20914 4.5 5C4.5 2.79086 6.29086 1 8.5 1C10.7091 1 12.5 2.79086 12.5 5Z" stroke="#5A5D5A" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}

const IconWithdraw = ({ className, stroke }: { className: string, stroke: string }) => {
    return (
        <svg className={className} width="80" height="70" viewBox="0 0 80 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M36.8538 50.4903C36.8538 50.4903 29.5843 50.4903 29.5843 46.0058C29.5843 42.2676 30.657 42.2677 32.6429 42.2677C34.6288 42.2677 45.6775 42.2677 45.6775 42.2677C45.6775 42.2677 55.2218 34.9155 62.2887 42.2676H77.0834V59.8117C73.9684 59.6666 56.8391 59.8117 56.8391 59.8117L47.4575 64.7592C42.2171 67.5231 36.0667 67.7408 30.657 65.3534L6.17183 54.5533C4.29883 53.7276 3.08337 51.8136 3.08337 49.6992C3.08337 46.068 6.53049 43.5217 9.82484 44.7206L25.6922 50.4903H36.8538Z" stroke={stroke} stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M70.202 42.27L70.202 3L10.0834 3L10.0834 42.27C20.517 42.27 25.4134 42.27 33.5834 42.27" stroke={stroke} stroke-width="5" stroke-linejoin="round" />
            <path d="M29.9851 22.5001C29.9851 28.2991 34.6861 33.0001 40.4851 33.0001C46.2841 33.0001 50.9851 28.2991 50.9851 22.5001C50.9851 16.7011 46.2841 12.0001 40.4851 12.0001C34.6861 12.0001 29.9851 16.7011 29.9851 22.5001Z" stroke={stroke} stroke-width="5" stroke-linejoin="round" />
            <path d="M23.9608 13.0001L19.8038 13.0001" stroke={stroke} stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M23.9608 33.1353L19.8038 33.1353" stroke={stroke} stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M60.9851 13.0001L56.8281 13.0001" stroke={stroke} stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M60.9851 33.1354L56.8281 33.1354" stroke={stroke} stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}

const IconPencilUpdate = () => {
    return (
        <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.36952 14.9568L0.0478417 18.4813C-0.00291019 18.6169 -0.0135485 18.7643 0.0171975 18.9058C0.0479436 19.0473 0.118774 19.177 0.221231 19.2793C0.323687 19.3817 0.453438 19.4524 0.594989 19.483C0.736539 19.5136 0.883906 19.5028 1.01949 19.4519L4.54297 18.1302C4.94626 17.9792 5.31254 17.7436 5.61721 17.4392L15.8235 7.23304C15.8235 7.23304 15.4675 6.16585 14.4013 5.09867C13.3351 4.03249 12.2669 3.67642 12.2669 3.67642L2.06054 13.8826C1.75618 14.1873 1.52057 14.5535 1.36952 14.9568ZM13.6901 2.25317L15.0812 0.862104C15.3307 0.612658 15.6636 0.453737 16.0116 0.512075C16.5015 0.592541 17.2508 0.835953 17.9569 1.54305C18.664 2.25015 18.9075 2.99849 18.9879 3.48833C19.0463 3.83635 18.8873 4.16928 18.6379 4.41873L17.2458 5.80979C17.2458 5.80979 16.8907 4.74361 15.8235 3.67743C14.7573 2.60923 13.6901 2.25317 13.6901 2.25317Z" fill="#6B6B6E" />
        </svg>

    )
}

const IconLogout = () => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.94198 8V5.2C8.94198 4.53726 9.47923 4 10.142 4H18.4086C19.0714 4 19.6086 4.53726 19.6086 5.2V18.8C19.6086 19.4627 19.0714 20 18.4086 20H10.142C9.47923 20 8.94198 19.4627 8.94198 18.8V16" stroke="#5A5D5A" stroke-width="1.6" />
            <path d="M6.94202 9.2987L4.39129 12L6.94202 14.7013" stroke="#5A5D5A" stroke-width="1.6" />
            <path d="M14 12H4.72464" stroke="#5A5D5A" stroke-width="1.6" />
        </svg>
    )
}

const IconSettings = () => {
    return (
        <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.39504 18.3711L7.97949 19.6856C8.15323 20.0768 8.43676 20.4093 8.79571 20.6426C9.15466 20.8759 9.5736 21.0001 10.0017 21C10.4298 21.0001 10.8488 20.8759 11.2077 20.6426C11.5667 20.4093 11.8502 20.0768 12.0239 19.6856L12.6084 18.3711C12.8164 17.9047 13.1664 17.5159 13.6084 17.26C14.0532 17.0034 14.5677 16.8941 15.0784 16.9478L16.5084 17.1C16.934 17.145 17.3636 17.0656 17.7451 16.8713C18.1265 16.6771 18.4434 16.3763 18.6573 16.0056C18.8714 15.635 18.9735 15.2103 18.951 14.7829C18.9285 14.3555 18.7825 13.9438 18.5306 13.5978L17.6839 12.4344C17.3825 12.0171 17.2214 11.5148 17.2239 11C17.2238 10.4866 17.3864 9.98635 17.6884 9.57111L18.535 8.40778C18.7869 8.06175 18.933 7.65007 18.9554 7.22267C18.9779 6.79528 18.8759 6.37054 18.6617 6C18.4478 5.62923 18.1309 5.32849 17.7495 5.13423C17.3681 4.93997 16.9385 4.86053 16.5128 4.90556L15.0828 5.05778C14.5722 5.11141 14.0576 5.00212 13.6128 4.74556C13.1699 4.48825 12.8199 4.09736 12.6128 3.62889L12.0239 2.31444C11.8502 1.92317 11.5667 1.59072 11.2077 1.3574C10.8488 1.12408 10.4298 0.99993 10.0017 1C9.5736 0.99993 9.15466 1.12408 8.79571 1.3574C8.43676 1.59072 8.15323 1.92317 7.97949 2.31444L7.39504 3.62889C7.18797 4.09736 6.83792 4.48825 6.39504 4.74556C5.95026 5.00212 5.43571 5.11141 4.92504 5.05778L3.4906 4.90556C3.06493 4.86053 2.63534 4.93997 2.25391 5.13423C1.87249 5.32849 1.55561 5.62923 1.34171 6C1.12753 6.37054 1.02549 6.79528 1.04798 7.22267C1.07046 7.65007 1.2165 8.06175 1.46838 8.40778L2.31504 9.57111C2.61698 9.98635 2.77958 10.4866 2.77949 11C2.77958 11.5134 2.61698 12.0137 2.31504 12.4289L1.46838 13.5922C1.2165 13.9382 1.07046 14.3499 1.04798 14.7773C1.02549 15.2047 1.12753 15.6295 1.34171 16C1.55582 16.3706 1.87274 16.6712 2.25411 16.8654C2.63548 17.0596 3.06496 17.1392 3.4906 17.0944L4.9206 16.9422C5.43127 16.8886 5.94581 16.9979 6.3906 17.2544C6.83513 17.511 7.18681 17.902 7.39504 18.3711Z" stroke="#5A5D5A" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M9.99992 14C11.6568 14 12.9999 12.6569 12.9999 11C12.9999 9.34315 11.6568 8 9.99992 8C8.34307 8 6.99992 9.34315 6.99992 11C6.99992 12.6569 8.34307 14 9.99992 14Z" stroke="#5A5D5A" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}

const IconHome = () => {
    return (
        <svg width="24" height="22" viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2 8.49999L11 1.69999C11.3 1.39999 11.5 1.29999 11.7 1.29999C11.9 1.29999 12 1.29999 12.2 1.29999C12.4 1.29999 12.6 1.49999 12.9 1.69999L21.9 8.49999M4 6.99999V16.8C4 17.9 4 18.5 4.2 18.9C4.4 19.3 4.7 19.6 5.1 19.8C5.5 20 6.1 20 7.2 20H16.8C17.9 20 18.5 20 18.9 19.8C19.3 19.6 19.6 19.3 19.8 18.9C20 18.5 20 17.9 20 16.8V6.99999L13.9 2.39999C13.2 1.89999 12.9 1.59999 12.5 1.49999C12.2 1.39999 11.8 1.39999 11.5 1.49999C11.1 1.59999 10.8 1.89999 10.1 2.39999L4 6.99999Z" stroke="#5A5D5A" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}

const IconSend = ({className,stroke}:{className:string,stroke:string}) => {
    return (
        <svg className={className} width="78" height="65" viewBox="0 0 78 65" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M75.25 3L56.2214 53.8536L31.4376 34.9272L3.25 25.5519L75.25 3ZM75.25 3L31.0165 34.699L29.4374 62L43.3777 44.0481" stroke={stroke} stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}

const IconHelpCenter = () => {
    return (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.09 8C8.3251 7.33167 8.78915 6.76811 9.39995 6.40913C10.0108 6.05016 10.7289 5.91894 11.4272 6.03871C12.1255 6.15849 12.7588 6.52152 13.2151 7.06353C13.6713 7.60553 13.9211 8.29152 13.92 9C13.92 11 10.92 12 10.92 12M11 16H11.01M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z" stroke="#5A5D5A" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    )
  }

export {
    IconArrow, IconAccounts, IconAddActions, IconBalances, IconBeneficiaries, IconCard, IconCards,
    IconConvert, IconCrypto, IconCryptoBalances, IconDeposit, IconDolar, IconNotification, IconUser,
    IconUsers, IconWithdraw, IconPencilUpdate, IconLogout, IconSettings,IconHome,IconSend,IconHelpCenter
}
