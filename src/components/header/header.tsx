import React from 'react';

const Header = () => {
    return (
        <header>
            <div className='logo'>
            <a href='/'>
            <span className='sr-only'>Go to Homepage</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 197 56">
                <path fill="url(#a)" fillRule="evenodd" d="M18 40C8.03721 40 0 32.1472 0 22.4131V0h36v22.4131C36 32.1472 27.8791 40 18 40ZM3.01395 2.94479V22.4131c0 7.6011 5.90075 13.833 13.47905 14.5693V2.94479H3.01395ZM32.986 22.4131c0 7.6011-5.9007 13.833-13.479 14.5693v-1.9813l13.479-13.0956v.5076Zm0-4.6721v-5.5884L19.507 25.2482v5.5884L32.986 17.741Zm0-9.75291L19.507 21.0837v-5.7922L32.2152 2.94479h.7708v5.0433Zm-5.0572-5.0433H19.507V11.127l8.4218-8.18221Z" clipRule="evenodd"/>
                <path fill="#333" fillRule="evenodd" d="M65.6369 20.9882v-3.9333h-9.0485V0H52v20.9882h13.6369Zm17.2948-.0001V5.78979h-4.0751V16.0794c-.7059.881-1.9572 1.7306-3.5295 1.7306-1.7327 0-2.8557-.6922-2.8557-2.8005V5.78979h-4.075V16.5828c0 2.9579 1.6043 4.7829 5.0055 4.7829 2.5349 0 4.3959-1.1642 5.4547-2.297v1.9194h4.0751Zm18.8023.0001V0h-4.1067v7.74078c-1.2193-1.57333-2.9519-2.32853-4.7809-2.32853-3.9467 0-6.8665 3.02079-6.8665 7.96105 0 5.0976 2.984 7.9925 6.8665 7.9925 1.8931 0 3.5616-.8181 4.7809-2.3285v1.9509h4.1067Zm-7.6041-3.1781c-2.3423 0-3.9467-1.7936-3.9467-4.4368 0-2.6117 1.6044-4.40533 3.9467-4.40533 1.3476 0 2.8236.72373 3.4974 1.73063v5.3808c-.6738 1.0069-2.1498 1.7307-3.4974 1.7307ZM105.777 0h4.075v20.9882h-4.075V0Zm15.306 21.3658c5.134 0 8.214-3.6816 8.214-7.9925 0-4.31095-3.08-7.96107-8.214-7.96107-5.102 0-8.182 3.65012-8.182 7.96107 0 4.3109 3.08 7.9925 8.182 7.9925Zm0-3.5557c-2.535 0-3.947-2.0454-3.947-4.4368 0-2.36 1.412-4.40535 3.947-4.40535 2.567 0 3.979 2.04535 3.979 4.40535 0 2.3914-1.412 4.4368-3.979 4.4368Zm29.231 3.178 4.717-15.19831h-4.268l-2.888 10.22661-3.401-10.22661h-3.626l-3.401 10.22661-2.888-10.22661h-4.235l4.716 15.19831h4.364l3.273-10.3525 3.273 10.3525h4.364ZM61.8506 50.2102c6.5136 0 9.6581-3.5872 9.6581-8.7792V28.8444h-4.6525v12.4607c0 2.9264-1.7006 4.9403-5.0056 4.9403-3.3049 0-5.0376-2.0139-5.0376-4.9403V28.8444h-4.6205V41.431c0 5.192 3.1445 8.7792 9.6581 8.7792Zm28.3647-.3777V39.1024c0-2.9578-1.6364-4.8458-5.0697-4.8458-2.5027 0-4.4279 1.1957-5.4226 2.3285v-1.9509h-4.0751v15.1983h4.0751V39.5744c.7059-.881 1.9252-1.7621 3.5295-1.7621 1.7327 0 2.8557.7237 2.8557 2.832v9.1882h4.1071Zm6.0323-16.8346c1.3476 0 2.4386-1.0699 2.4386-2.3914 0-1.3216-1.091-2.36-2.4386-2.36-1.3156 0-2.4065 1.0384-2.4065 2.36 0 1.3215 1.0909 2.3914 2.4065 2.3914Zm2.0535 16.8346V34.6342h-4.075v15.1983h4.075Zm12.4499 0 6.225-15.1983h-4.364l-4.075 10.5727-4.043-10.5727h-4.364l6.225 15.1983h4.396Zm15.337.3776c2.407 0 4.845-.7237 6.386-2.1082l-1.829-2.6432c-.995.944-2.792 1.4789-4.107 1.4789-2.632 0-4.172-1.5418-4.461-3.3984h11.52v-.944c0-4.9402-3.113-8.3386-7.765-8.3386-4.685 0-8.022 3.5557-8.022 7.961 0 4.8773 3.562 7.9925 8.278 7.9925Zm3.594-9.4399h-7.637c.161-1.5104 1.252-3.2411 3.787-3.2411 2.695 0 3.722 1.7936 3.85 3.2411Zm10.942 9.0623V39.7947c.673-.9755 2.47-1.7307 3.818-1.7307.481 0 .834.0315 1.123.0944v-3.9018c-1.925 0-3.818 1.1013-4.941 2.4229v-2.0453h-4.075v15.1983h4.075Zm13.059.3776c4.3 0 6.738-2.0453 6.738-4.8458 0-6.136-9.209-4.248-9.209-6.4821 0-.8496.963-1.479 2.439-1.479 1.893 0 3.658.8182 4.588 1.7622l1.637-2.832c-1.541-1.1957-3.626-2.0768-6.225-2.0768-4.107 0-6.353 2.2341-6.353 4.7829 0 5.9787 9.176 3.9333 9.176 6.4192 0 .944-.834 1.6048-2.599 1.6048-1.925 0-4.203-1.0384-5.358-2.1083l-1.765 2.8949c1.637 1.479 4.236 2.36 6.931 2.36Zm11.744-17.2122c1.347 0 2.438-1.0699 2.438-2.3914 0-1.3216-1.091-2.36-2.438-2.36-1.316 0-2.407 1.0384-2.407 2.36 0 1.3215 1.091 2.3914 2.407 2.3914Zm2.053 16.8346V34.6342h-4.075v15.1983h4.075Zm9.241.3776c1.701 0 2.792-.4405 3.401-.9754l-.866-3.0523c-.225.2517-.802.472-1.412.472-.898 0-1.412-.7237-1.412-1.6992V38.127h3.145v-3.4928h-3.145v-4.1536h-4.075v4.1536h-2.567v3.4928h2.567v7.8981c0 2.7376 1.508 4.185 4.364 4.185Zm5.134 5.5381c.481.1573 1.54.2517 1.989.2517 2.664-.0629 4.717-.8181 5.872-3.6815L197 34.6342h-4.364l-4.075 10.5727-4.043-10.5727h-4.364l6.289 15.3871-.577 1.3216c-.385.8181-1.091 1.1013-2.15 1.1013-.385 0-.93-.0944-1.283-.2517l-.578 3.5557Z" clipRule="evenodd"/>
                <defs>
                    <linearGradient id="a" x1="-6.77487" x2="46.256" y1="4.3e-7" y2="34.6763" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#4089F6"/>
                    <stop offset="1" stopColor="#38FFDB"/>
                    </linearGradient>
                </defs>
            </svg>
            </a>
            </div>
        </header>
    )
}

export default Header;