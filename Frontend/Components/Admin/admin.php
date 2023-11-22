<div class="admin-container">
    <header>
        <nav>
            <div class="gestion-salir-nav">Salir</div>
            <div class="gestion-inicio-nav">Inicio</div>
            <div class="gestion-lineas-nav">Lineas</div>
            <div class="gestion-viajes-nav">Viajes</div>
            <div class="gestion-usuarios-nav">Clientes</div>
            <?php 
                $adminFile = './Frontend/components/Admin/adminInclude.php';
                if(!(session_status() == PHP_SESSION_ACTIVE)){
                    session_start();
                }
                $sessionValue = $_SESSION['tipo_usuario'];
            ?>
            <?php if (intval($sessionValue) == 3 ): ?>
                    <div class="gestion-admins-nav">Administradores</div>
            <?php endif; ?>
        </nav>
    </header>
    <div class="component" id="component-lineas">
        <section class="crear-linea gestion-lineas">
            <h1>Crear linea</h1>
            <form id="crear-linea-admin-form">
                <div class="form-div">
                    <span class="material-symbols-rounded form-icon">lock</span>
                    <div class="label-input-div">
                        <label for="origen-linea" class="form-label">Origen</label>
                        <div class="input-origen-linea-div">
                            <input style="text-transform:initial !important;" id="origen-linea" class="form-input" name="origenLinea" type="text" required>
                        </div>
                    </div>
                </div>
                <div class="form-div">
                    <span class="material-symbols-rounded form-icon">lock</span>
                    <div class="label-input-div">
                        <label for="destino-linea" class="form-label">Destino</label>
                        <div class="input-destino-linea-div">
                            <input style="text-transform:initial !important;" id="destino-linea" class="form-input" name="destinoLinea" type="text" required>
                        </div>
                    </div>
                </div>
                <div class="form-div">
                    <span class="material-symbols-rounded form-icon">lock</span>
                    <div class="label-input-div">
                        <label for="nom-linea" class="form-label">Nombre</label>
                        <div class="input-nom-linea-div">
                            <input style="text-transform:initial !important;" id="nom-linea" class="form-input" name="nomLinea" maxlength="5" type="text" required>
                        </div>
                    </div>
                </div>
                <div class="form-tramos-div">

                    <button type="button" class="btn-nuevo-tramo" id="btn-nuevo-tramo">+</button>
                </div>

                <p id="admin-submit-crear-linea" class="admin-submitBtn">CREAR LINEA</p>
                
            </form>
        </section>
        <section class="editar-linea gestion-lineas">
            <h1>Editar linea</h1>
            <form id="editar-linea-admin-form">
                <section class="editar-linea-content">                    
                </section>
            </form>
        </section>
    </div>
    <div class="component" id="component-viajes">
        <section class="crear-viaje gestion-viajes">
            <h1>Crear viaje</h1>
            <form id="crear-viaje-form">
                <div class="form-div">
                    <span class="material-symbols-rounded form-icon">lock</span>
                    <div class="label-input-div">
                        <label for="linea-viaje-input" class="form-label-noaction">Linea</label>
                        <select id="linea-viaje-input" class="select-crear-viaje" required></select>
                    </div>
                </div>
                <div class="form-div">
                    <span class="material-symbols-rounded form-icon">lock</span>
                    <div class="label-input-div">
                        <label for="unidad-viaje-input" class="form-label-noaction">Unidad</label>
                        <select id="unidad-viaje-input" class="select-crear-viaje" required></select>
                    </div>
                </div>
                <div class="form-div">
                    <span class="material-symbols-rounded form-icon">lock</span>
                    <div class="label-input-div">
                        <label for="sentido-viaje-input" class="form-label-noaction">Sentido</label>
                        <select id="sentido-viaje-input" class="select-crear-viaje" required>
                            <option value="Ida">Ida</option>
                            <option value="Vuelta">Vuelta</option>
                        </select>
                    </div>
                </div>
                <div class="form-div">
                    <span class="material-symbols-rounded form-icon">lock</span>
                    <div class="label-input-div">
                        <label for="diasalida-viaje-input" class="form-label-noaction">Dia de salida</label>
                        <input style="text-transform:initial !important;" id="diasalida-viaje-input" class="form-input" type="date" required>
                    </div>
                </div>
                <div class="form-div">
                    <span class="material-symbols-rounded form-icon">lock</span>
                    <div class="label-input-div">
                        <label for="horasalida-viaje-input" class="form-label-noaction">Hora de salida</label>
                        <input style="text-transform:initial !important;" id="horasalida-viaje-input" class="form-input" type="time" required>
                    </div>
                </div>
                <p id="admin-submit-crear-viaje" class="admin-submitBtn">CREAR VIAJE</p>
            </form>
        </section>
        <!-- <section class="gestionar-viaje gestion-viajes">
            <h1>Gestionar viajes</h1>
            <div class="gestion-viajes-container">
            </div>
        </section> -->
    </div>
    <div class="component" id="component-usuarios">
        <section class="gestionar-clientes gestion-usuarios">
            <h1>Gestionar clientes</h1>
            <div class="gestion-clientes-container">
            </div>
        </section>
    </div>
    <div class="component" id="component-admins">
        <section class="gestionar-admin gestion-admins">
            <h1>Gestionar administradores</h1>
            <div class="gestion-admins-container">
            </div>
        </section>
        <section class="crear-admin gestion-admins">
            <h1>Crear administrador</h1>

            <form id="crear-admin-admin-form">
                <div class="form-div">
                    <span class="material-symbols-rounded form-icon">person</span>
                    <div class="label-input-div">
                        <label for="form-name" class="form-label ">NOMBRE Y APELLIDO</label>
                        <input id="form-name" class="form-input" name="formName" type="text" maxlength="40" required>
                    </div>
                </div>
                <div class="form-div">
                    <span class="material-symbols-rounded form-icon">phone</span>
                    <div class="label-input-div">
                        <label for="form-phone" class="form-label ">TELEFONO</label>
                        <input id="form-phone" class="form-input" name="formPhone" type="text" maxlength="11" required>
                    </div>
                </div>
                <div class="form-div">
                    <span class="material-symbols-rounded form-icon">email</span>
                    <div class="label-input-div">
                        <label for="form-email" class="form-label">EMAIL</label>
                        <input style="text-transform:initial !important;" id="form-email" class="form-input" name="formEmail" type="email" maxlength="100" required>
                    </div>
                </div>
                <div class="form-div">
                    <span class="material-symbols-rounded form-icon">lock</span>
                    <div class="label-input-div">
                        <label for="form-pswd" class="form-label">CONTRASEÑA</label>
                        <div class="input-show-pswd-div">
                            <input style="text-transform:initial !important;" id="form-pswd" class="form-input" name="formPswd" type="password" maxlength="32" required>
                        </div>
                    </div>
                </div>
                <div class="form-div">
                    <span class="material-symbols-rounded form-icon">lock</span>
                    <div class="label-input-div">
                        <label for="form-confPswd" class="form-label">CONTRSEÑA</label>
                        <div class="input-show-pswd-div">
                            <input style="text-transform:initial !important;" id="form-confPswd" class="form-input" name="formConfPswd" type="password" maxlength="32" required>
                        </div>
                    </div>
                </div>
                <p id="create-admin-submit" class="admin-submitBtn">CREAR ADMINISTRADOR</p>
            </form>
        </section>
    </div>
    <div class="component" id="component-inicio">
        <section class="crearGestionar-parada gestion-inicio">
            <h1>Crear parada</h1>
            
            <div class="admin-crear-parada-cont">
                 <form id="crear-parada-admin-form">
                    <div class="form-div">
                        <span class="material-symbols-rounded form-icon">lock</span>
                        <div class="label-input-div">
                            <label for="admin-crear-nombre-parada" class="form-label">Nombre</label>
                            <div class="input-origen-linea-div">
                                <input style="text-transform:initial !important;" id="admin-crear-nombre-parada" class="form-input" type="text" required>
                            </div>
                        </div>
                    </div>
                    <div class="form-div">
                        <span class="material-symbols-rounded form-icon">lock</span>
                        <div class="label-input-div">
                            <label for="admin-crear-comentario-parada" class="form-label">Comentario</label>
                            <div class="input-origen-linea-div">
                                <input style="text-transform:initial !important;" id="admin-crear-comentario-parada" class="form-input" type="text" required>
                            </div>
                        </div>
                    </div>
                    <p id="admin-submit-crear-parada" class="admin-submitBtn">CREAR PARADA</p>
                </form>
                
            </div>

        </section>
        <section class="crear-unidad gestion-inicio">
        <h1>Crear unidad</h1>
        <div class="admin-crear-unidad-cont">
            <form id="crear-unidad-admin-form">
                <div class="form-div">
                    <span class="material-symbols-rounded form-icon">lock</span>
                    <div class="label-input-div">
                        <label for="admin-crear-unidad-matricula" class="form-label">Matricula</label>
                        <div class="input-origen-linea-div">
                            <input style="text-transform:initial !important;" id="admin-crear-unidad-matricula" class="form-input" type="text" required>
                        </div>
                    </div>
                </div>
                <div class="form-div">
                    <span class="material-symbols-rounded form-icon">lock</span>
                    <div class="label-input-div">
                        <label for="admin-crear-unidad-asiento" class="form-label">Asientos</label>
                        <div class="input-origen-linea-div">
                            <input style="text-transform:initial !important;" id="admin-crear-unidad-asiento" class="form-input" type="text" required>
                        </div>
                    </div>
                </div>
                <p id="admin-submit-crear-unidad" class="admin-submitBtn">CREAR UNIDAD</p>
            </form>
        </div>
        </section>
    </div>
</div>