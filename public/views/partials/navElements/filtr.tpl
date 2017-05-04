<div class="container-fluid" id="selector">
    <form>
        <fieldset>
            <legend>Параметры авто</legend>
            <div class="form-group">
                <label for="selectBrend">Марка</label>
                <select id="selectBrend" class="form-control">
                    <option selected>Не выбрано</option>
                </select>
            </div>
            <div class="form-group">
                <label for="selectModel">Модель</label>
                <select id="selectModel" class="form-control" disabled>
                    <option selected>Не выбрано</option>
                </select>
            </div>
            <div class="form-group">
                <label for="selectDateFrom">Год выпуска</label>
                <div class="row">
                    <div class="col-sm-6">
                        <select id="selectDateFrom" class="form-control">
                            <option selected>С</option>
                        </select>
                    </div>
                    <div class="col-sm-6">
                        <select id="selectDateTo" class="form-control">
                            <option selected>По</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <div class="row">
                    <div class="col-sm-6">
                        <label for="selectCostFrom">Цена, BYN</label>
                    </div>
                    <div class="col-sm-3">
                        <a href="">USD</a>
                    </div>
                    <div class="col-sm-3">
                        <a href="">EURO</a>
                    </div>
                </div>

                <div class="row">
                    <div class="col-sm-6">
                        <select id="selectCostFrom" class="form-control">
                            <option selected>От</option>
                        </select>
                    </div>
                    <div class="col-sm-6">
                        <select id="selectCostTo" class="form-control">
                            <option selected>До</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <div class="row">
                    <div class="col-sm-6">
                        <button class="form-control btn btn-success">Автомат</button>
                    </div>
                    <div class="col-sm-6">
                        <button class="form-control btn btn-success">Механика</button>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <label for="selectVolumeFrom">Объем двигателя</label>
                <div class="row">
                    <div class="col-sm-6">
                        <select id="selectVolumeFrom" class="form-control">
                            <option selected>От</option>
                        </select>
                    </div>
                    <div class="col-sm-6">
                        <select id="selectVolumeTo" class="form-control">
                            <option selected>До</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="form-group">
                    <div class="row">
                        <div class="col-sm-4">
                            <button class="form-control btn btn-success">Бензин</button>
                        </div>
                        <div class="col-sm-4">
                            <button class="form-control btn btn-success">Дизель</button>
                        </div>
                        <div class="col-sm-4">
                            <button class="form-control btn btn-success">Электро</button>
                        </div>
                    </div>
                </div>
            <div class="form-group">
                <button class="form-control btn btn-primary">Применить фильтр</button>
            </div>
        </fieldset>
    </form>
</div>