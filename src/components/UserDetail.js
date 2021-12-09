const UserDetail = () => {

    return (
        <section className="userDetail">

            <header className="userDetail-header">
                Deposit money in account
            </header>

            <main className="userDetail-main">

                <div className="userDetail-name">

                    <div className="userName">
                        John Doe
                    </div>
                    <div className="bankName">
                        Axis Bank
                    </div>
                </div>

                <div className="userDetail-accountDetail">

                    <div className="accountLabel">
                        Account Number
                    </div>
                    <div className="labelValue">
                        123464859908XFGUJ
                    </div>
                </div>

                <div className="userDetail-accountDetail">

                    <div className="accountLabel">
                        IFSC Code
                    </div>
                    <div className="labelValue">
                        UTIXFRD
                    </div>
                </div>

            </main>


        </section>
    )

}

export default UserDetail;